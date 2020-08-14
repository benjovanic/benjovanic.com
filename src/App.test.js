import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders brand icons", () => {
  const profiles = [
    "LinkedIn",
    "GitHub",
    "Keybase",
    "StackOverflow",
    "Twitter",
    "Instagram",
    "Facebook",
    "Strava"
  ];

  const { container } = render(<App />);
  const titles = [];

  container
    .querySelectorAll("[data-id='profile-icon'] title")
    .forEach(i => titles.push(i.innerHTML));

  expect(profiles.sort()).toEqual(titles.sort());
});
