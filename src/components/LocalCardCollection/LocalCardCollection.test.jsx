import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import LocalCardCollection from "./LocalCardCollection";
import { deleteCard } from "../../redux/localCardsSlice";
import { vi } from "vitest";

const mockStore = configureStore([]);
const initialState = {
  localCards: [
    {
      key: "1",
      michiName: "Michi 1",
      image: "https://example.com/michi1.jpg",
      atributtes: "Cute and playful",
      stats: { agility: 10, softness: 8, evilness: 2 },
      rarity: 5,
    },
    {
      key: "2",
      michiName: "Michi 2",
      image: "https://example.com/michi2.jpg",
      atributtes: "Lazy and sleepy",
      stats: { agility: 3, softness: 10, evilness: 1 },
      rarity: 6,
    },
  ],
};

describe("LocalCardCollection Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = vi.fn();
  });

  test("renders message when there are no cards", () => {
    store = mockStore({ localCards: [] });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalCardCollection />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/Your Local Storage is empty of Michis/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Create A New Michi Card!/i)).toBeInTheDocument();
  });

  test("renders cards correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalCardCollection />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Michi 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Michi 2/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/michi/i).length).toBe(2);
  });

  test("opens and closes the delete modal", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalCardCollection />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("delete-button-1"));
    expect(
      screen.getByText(/You want to delete this card forever?/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Cancel/i));
    expect(
      screen.queryByText(/You want to delete this card forever?/i)
    ).not.toBeInTheDocument();
  });

  test("deletes a card and updates the state", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalCardCollection />
        </MemoryRouter>
      </Provider>
    );

    // Abrir el modal de eliminación
    fireEvent.click(screen.getByTestId("delete-button-1"));
    expect(
      screen.getByText(/You want to delete this card forever?/i)
    ).toBeInTheDocument();

    // Confirmar la eliminación
    fireEvent.click(screen.getByTestId("confirm-delete-button"));

    // Verificar que la acción deleteCard haya sido despachada
    expect(store.dispatch).toHaveBeenCalledWith(deleteCard("1"));

    // Verificar que el modal se haya cerrado
    expect(
      screen.queryByText(/You want to delete this card forever?/i)
    ).not.toBeInTheDocument();
  });
});
