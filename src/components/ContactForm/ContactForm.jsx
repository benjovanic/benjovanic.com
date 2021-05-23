import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as api from '../../api/api';
import './style.css';

const ContactForm = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState(null);
  const [formUntouched, setFormUntouched] = useState(true);
  const [sending, setSending] = useState(false);

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

  const formValid = () => {
    setFormUntouched(false);
    const error = {};
    if (!data?.name) {
      error.name = 'Please complete';
    }
    if (!data?.email) {
      error.email = 'Please complete';
    } else if (!data.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      error.email = 'Invalid email address';
    }
    if (!data?.message) {
      error.message = 'Please complete';
    }
    if (error?.name || error?.email || error?.message) {
      setMessage(error);
      return false;
    }
    setMessage(null);
    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (formValid()) {
      setSending(true);
      api.contact(data)
        .then(() => {
          setMessage(null);
          setData({});
          setFormUntouched(true);
          setSending(false);
          document.getElementById('form').reset();
        })
        .catch(() => {
          setMessage({ error: 'There was an error sending the message, please try again!' });
          setSending(false);
        });
    }
  };

  return (
    <form
      style={{ width: '80%', margin: '0 auto 50px auto' }}
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
      id="form"
    >
      {message?.error && (
        <Typography align="left" component="p" gutterBottom>
          {message?.error}
        </Typography>
      )}
      <Grid item xs={12} style={{ marginTop: 10 }}>
        Name
        <TextField
          id="form-name"
          name="name"
          variant="outlined"
          onChange={handleChange}
          onBlur={formValid}
          required
          error={message?.name}
        />
        {message?.name && (
          <Typography align="left" component="p" gutterBottom>
            {message?.name}
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
          onBlur={formValid}
          required
          error={message?.email}
        />
        {message?.email && (
          <Typography align="left" component="p" gutterBottom>
            {message?.email}
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
          onBlur={formValid}
          required
          multiline
          rows={4}
          error={message?.message}
        />
        {message?.message && (
          <Typography align="left" component="p" gutterBottom>
            {message?.message}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Button
          style={{ backgroundColor: '#fff' }}
          variant="contained"
          type="submit"
          disabled={formUntouched || message || sending}
        >
          {sending ? 'Sending...' : 'Send'}
        </Button>
      </Grid>
    </form>
  );
};

export default ContactForm;
