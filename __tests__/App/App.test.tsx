import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../src/components/App/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenue/i);
  expect(linkElement).toBeInTheDocument();
});
