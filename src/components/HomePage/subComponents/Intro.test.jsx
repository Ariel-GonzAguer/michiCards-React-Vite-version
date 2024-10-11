// Intro.test.jsx
import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro Component", () => {
  test("renders the Intro component with the correct text", () => {
    render(<Intro />);
    expect(screen.getByText(/This game needs phone screen size to work properly/i)).toBeInTheDocument();
  });
});