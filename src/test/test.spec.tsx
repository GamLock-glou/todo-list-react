import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BlockForAdd } from "../components/blockForAdd/BlockForAdd";

function hasInputValue(e: any, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
  }

describe("test blockForAdd", () => {
  test("Input write 2 letters", () => {
    render(<BlockForAdd setValueInArray={() => {}} />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.input(input, {
        target: {value: 'hi'}
    });
    fireEvent.keyDown(input, {key: 'Enter'});
    expect(hasInputValue(input, 'hi')).toBe(true)
  });

  test("Input write 5 letters", () => {
    render(<BlockForAdd setValueInArray={() => {}} />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    userEvent.type(input, 'hello')
    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', charCode: 13})
    expect(hasInputValue(input, '')).toBe(true)
  });

});
