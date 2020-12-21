/* eslint-disable react/jsx-filename-extension */
import { render } from "@testing-library/react";
import React from "react";
import ContentContainer from ".";

describe("ContentContainer component", () => {
  test("should render ContentContainer component correctly", () => {
    render(<ContentContainer />);
  });

  test("should render component inner children correctly", () => {
    const Component = () => {
      return (
        <ContentContainer>
          <p>Rendered</p>
        </ContentContainer>
      );
    };
    const { getByText } = render(<Component />);
    expect(getByText("Rendered")).toBeInTheDocument();
  });
});
