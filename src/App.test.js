import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders brand icons", () => {
  const profiles = [
    "LinkedIn",
    "GitHub",
    "Keybase",
    "StackExchange",
    "Twitter",
    "Instagram",
    "Facebook",
    "Strava"
  ];

  const { getByTitle } = render(<App />);

  profiles.forEach(profile => {
    const linkElement = getByTitle(profile);
    expect(linkElement).toBeInTheDocument();
  });
});
