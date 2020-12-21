/* eslint-disable react/jsx-filename-extension */
import { render } from "@testing-library/react";
import React from "react";
import ContentContainer from ".";

describe("ContentContainer component", () => {
  test("should render ContentContainer component correctly", () => {
    render(<ContentContainer />);
  });
});
