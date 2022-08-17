import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardItem from "./CardItem";

describe("Card item", () => {
  it("renders correct product title", () => {
    const { container } = render(<CardItem />);
    expect(container).toMatchSnapshot();
  });

  it("increments and decrements properly", () => {
    render(<CardItem />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });

    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(screen.getByRole("input").value).toMatch(0);
  });
  it("accepts manually typing in the quantity", () => {
    const onChangeMock = jest.fn();
    render(<CardItem onChange={onChangeMock} />);
    const input = screen.getByRole("input");

    userEvent.type(input, "123");

    expect(onChangeMock).toHaveBeenCalledWith(1, 1);
    expect(onChangeMock).toHaveBeenCalledWith(2, 12);
    expect(onChangeMock).toHaveBeenCalledWith(3, 123);
  });
  it("adds to cart after button click", () => {
    const onClickMock = jest.fn();
    render(<CardItem onClick={onClickMock} />);
    const button = screen.getByRole("button", { name: "Add To Cart" });

    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
