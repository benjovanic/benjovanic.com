import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as api from '../../api/api';
import './style.css';

const ContactForm = () => {
  const [data, setData] = useState({});
  const [messages, setMessages] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // the API is running on a free Heroku pod so this initial call helps wake it up
    // before a user would complete the contact form
    api.healthCheck();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formValid = (field) => {
    let valid = true;
    const error = {
      name: '',
      email: '',
      message: '',
    };
    if (messages?.name || !field || field === 'name') {
      if (!data?.name) {
        error.name = 'Please complete';
        valid = false;
      } else {
        error.name = '';
      }
    }
    if (messages?.email || !field || field === 'email') {
      if (!data?.email) {
        error.email = 'Please complete';
        valid = false;
      } else if (!data.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        error.email = 'Invalid email address';
        valid = false;
      } else {
        error.email = '';
      }
    }
    if (messages?.message || !field || field === 'message') {
      if (!data?.message) {
        error.message = 'Please complete';
        valid = false;
      } else {
        error.message = '';
      }
    }
    setMessages(error);
    return valid;
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (formValid()) {
      setSending(true);
      api.contact(data)
        .then(() => {
          setMessages({
            success: 'Thanks for your message, I\'ll be in touch soon.',
          });
          setData({});
          setSending(false);
          setSent(true);
          document.getElementById('form').reset();
        })
        .catch(() => {
          setMessages({
            error: 'There was an error sending the message, please try again!',
          });
          setSending(false);
        });
    }
  };

  const resetForm = () => setSent(false);

  return (
    <form
      style={{ width: '80%', margin: '0 auto 50px auto' }}
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
      id="form"
    >
      <Typography align="left" variant="h6" component="h2" gutterBottom>
        Get in touch
      </Typography>
      {(messages?.error || messages?.success) && (
        <Typography align="left" component="p" gutterBottom>
          {messages?.error || messages?.success}
        </Typography>
      )}
      {!sent ? (
        <>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            Name
            <TextField
              id="form-name"
              name="name"
              variant="outlined"
              onChange={handleChange}
              onBlur={() => formValid('name')}
              required
              error={!!messages?.name}
            />
            {messages?.name && (
              <Typography align="left" component="p" gutterBottom>
                {messages?.name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            Email
            <TextField
              type="email"
              id="form-email"
              name="email"
              variant="outlined"
              onChange={handleChange}
              onBlur={() => formValid('email')}
              required
              error={!!messages?.email}
            />
            {messages?.email && (
              <Typography align="left" component="p" gutterBottom>
                {messages?.email}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            Message
            <TextField
              id="form-message"
              name="message"
              variant="outlined"
              onChange={handleChange}
              onBlur={() => formValid('message')}
              required
              multiline
              rows={4}
              error={!!messages?.message}
            />
            {messages?.message && (
              <Typography align="left" component="p" gutterBottom>
                {messages?.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Button
              style={{ backgroundColor: '#fff' }}
              variant="contained"
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send'}
            </Button>
          </Grid>
        </>
      ) : (
        <p>
          <Button
            style={{ backgroundColor: '#fff' }}
            variant="contained"
            type="button"
            onClick={resetForm}
          >
            Send another message
          </Button>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
