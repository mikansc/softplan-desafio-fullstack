/* eslint-disable react/jsx-filename-extension */
import { render } from "@testing-library/react";
import React from "react";
import LoginContainer from ".";

describe("LoginContainer component", () => {
  test("should render LoginContainer component correctly", () => {
    render(<LoginContainer />);
  });

  test("should render component inner children correctly", () => {
    const Component = () => (
      <LoginContainer>
        <p>Rendered</p>
      </LoginContainer>
    );
    const { getByText } = render(<Component />);
    expect(getByText("Rendered")).toBeInTheDocument();
  });
});
