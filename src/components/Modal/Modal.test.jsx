import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import styles from "./Modal.module.css";

describe("Modal Component", () => {
  const setOpen = vi.fn();
  const modalContent = {
    text: "Delete this card forever?",
    close: { text: "Cancel", class: "cancel" },
    button_Two: (
      <button
        className={styles.button_Two}
        data-testid="delete-button"
        onClick={() => {
          // Simular la función handleDelete
          setOpen(false);
        }}
      >
        Delete
      </button>
    ),
  };

  test("renders modal with correct content", () => {
    render(<Modal setOpen={setOpen} modalContent={modalContent} />);

    expect(screen.getByText(/Delete this card forever?/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
  });

  test("calls setOpen(false) when Cancel button is clicked", () => {
    render(<Modal setOpen={setOpen} modalContent={modalContent} />);

    fireEvent.click(screen.getByText(/Cancel/i));
    expect(setOpen).toHaveBeenCalledWith(false);
  });

  test("calls setOpen(false) when Delete button is clicked", () => {
    render(<Modal setOpen={setOpen} modalContent={modalContent} />);

    fireEvent.click(screen.getByTestId("delete-button"));
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});