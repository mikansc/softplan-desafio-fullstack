/* eslint-disable react/jsx-filename-extension */
import { render } from "@testing-library/react";
import React from "react";

const Navbar = () => {
  return <p />;
};

describe("Navbar component", () => {
  test("should render Navbar component correctly", () => {
    render(<Navbar />);
  });
});