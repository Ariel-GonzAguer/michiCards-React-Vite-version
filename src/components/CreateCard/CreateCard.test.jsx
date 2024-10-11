// CreateCard.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import CreateCard from "./CreateCard";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("CreateCard Component", () => {
  test("renders the CreateCard component with the correct text", () => {
    renderWithRouter(<CreateCard />);

    expect(screen.getByText(/Create your own Michi Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Name of the Michi/i)).toBeInTheDocument();
    expect(screen.getByText(/Describe the Michi/i)).toBeInTheDocument();
    expect(screen.getByText(/Set the Michi Stats/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Choose one option for the Picture/i)
    ).toBeInTheDocument();
  });

  test("handles form submission correctly", () => {
    renderWithRouter(<CreateCard />);

    fireEvent.change(screen.getByLabelText(/Name of the Michi/i), {
      target: { value: "Test Michi" },
    });
    fireEvent.change(screen.getByLabelText(/Describe the Michi/i), {
      target: { value: "Test Atributtes" },
    });

    fireEvent.click(screen.getByText(/Create!/i));

    expect(
      screen.getByText(/Preview a random picture or load your own michi/i)
    ).toBeInTheDocument();
  });

  test("handles random image generation correctly", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { url: "https://example.com/image.jpg", width: 400, height: 400 },
          ]),
      })
    );

    renderWithRouter(<CreateCard />);

    fireEvent.click(screen.getByText(/Get random picture/i));

    const image = await screen.findByAltText(/preview of the michi/i);
    expect(image).toBeInTheDocument();
    expect(image.src).toBe("https://example.com/image.jpg");
  });

  test("handles local image upload correctly", () => {
    renderWithRouter(<CreateCard />);

    const file = new File(["(⌐□_□)"], "coolcat.png", { type: "image/png" });
    const input = screen.getByLabelText(/Take your own picture/i);

    fireEvent.change(input, { target: { files: [file] } });

    const reader = new FileReader();
    reader.onload = () => {
      const image = screen.getByAltText(/preview of the michi/i);
      expect(image).toBeInTheDocument();
      expect(image.src).toBe(reader.result);
    };
    reader.readAsDataURL(file);
  });
});
