/* eslint-disable react/jsx-filename-extension */
import { render, screen } from "@testing-library/react";
import React from "react";
import Navbar from ".";

describe("Navbar component", () => {
  test("should render Navbar component correctly", () => {
    render(<Navbar />);
  });

  describe("Navbar elements", () => {
    beforeEach(() => {
      render(<Navbar />);
    });

    test("should render a logo element with testid='projectLogo'", () => {
      expect(screen.getByTestId("projectLogo")).toBeInTheDocument();
    });
  });
});
