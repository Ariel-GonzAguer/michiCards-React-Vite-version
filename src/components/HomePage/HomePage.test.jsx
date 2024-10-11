// HomePage.test.jsx
import { render, screen, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import HomePage from "./HomePage";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

describe("HomePage Component", () => {
  beforeAll(() => {
    // Mock fetch to avoid network requests during tests
    vi.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ url: "https://cataas.com/cat/gif" }),
      })
    );
  });

  afterAll(() => {
    // Restore original fetch implementation
    global.fetch.mockRestore();
  });

  test("renders all subcomponents correctly", () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText(/Michi Cards/i)).toBeInTheDocument();
    expect(screen.getByTestId("gif-container")).toBeInTheDocument();
    expect(screen.getByText(/Create Michi Card/i)).toBeInTheDocument();
    expect(screen.getByText(/User Guide/i)).toBeInTheDocument();
    expect(screen.getByText(/Donate/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Local Collection/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Developed by Ariel Gonz-Agüer/i)
    ).toBeInTheDocument();
  });
});
