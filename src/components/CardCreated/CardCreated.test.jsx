// CardCreated.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardCreated from "./CardCreated";

const mockStore = configureStore([]);
const initialState = {}; // Define el estado inicial de tu store si es necesario

const renderWithProviders = (ui, { route = "/", state = {} } = {}) => {
  const store = mockStore(state);
  window.history.pushState({ state }, "Test page", route);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: route, state }]}>
        <Routes>
          <Route path="*" element={ui} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("CardCreated Component", () => {
  test("renders the CardCreated component with the correct text", () => {
    const state = {
      michiName: "Test Michi",
      atributtes: "Test Atributtes",
      image: "https://example.com/image.jpg",
      stats: { strength: 10, agility: 8 },
    };

    renderWithProviders(<CardCreated />, { route: "/", state });

    expect(screen.getByText(/Test Michi/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Atributtes/i)).toBeInTheDocument();
    expect(screen.getByAltText(/michi/i)).toBeInTheDocument();
    expect(screen.getByText(/strength/i)).toBeInTheDocument();
    expect(screen.getByText(/agility/i)).toBeInTheDocument();
  });

  test("renders the footer with the correct text", () => {
    const state = {
      michiName: "Test Michi",
      atributtes: "Test Atributtes",
      image: "https://example.com/image.jpg",
      stats: { strength: 10, agility: 8 },
    };

    renderWithProviders(<CardCreated />, { route: "/", state });

    expect(
      screen.getByText(/Developed by Ariel Gonz-Agüer/i)
    ).toBeInTheDocument();
  });
});
