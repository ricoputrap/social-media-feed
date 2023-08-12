import React from 'react'
import { render, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/extend-expect';
import Button, { COLOR, Variant } from '.';

afterEach(() => {
  cleanup()
});

describe("<Button />", () => {
  test("Button is rendered with correct label", () => {
    const variant: Variant = "primary";
    const { getByText } = render(
      <Button
        variant={variant}
        label={variant}
        onClick={() => { }}
      />
    );

    const button = getByText(variant);
    expect(button).toBeTruthy();
  });

  test("Button primary is rendered with correct styles", () => {
    const variant: Variant = "primary";
    const { getByText } = render(
      <Button
        variant={variant}
        label={variant}
        onClick={() => { }}
      />
    );

    const button = getByText(variant);
    expect(button).toHaveClass(COLOR[variant]);
  });

  test("Button secondary is rendered with correct styles", () => {
    const variant: Variant = "secondary";
    const { getByText } = render(
      <Button
        variant={variant}
        label={variant}
        onClick={() => { }}
      />
    );

    const button = getByText(variant);
    expect(button).toHaveClass(COLOR[variant]);
  });

  test("Button with loading is rendered with correct styles", () => {
    const variant: Variant = "primary";
    const { getByText } = render(
      <Button
        variant={variant}
        label={variant}
        isLoading
        onClick={() => { }}
      />
    );

    const button = getByText(variant);
    const loadingIcon = button.querySelector("svg");
    expect(loadingIcon).toBeInTheDocument();
  });

  test("Button can handle click from the user", async () => {
    // setup user session
    const user = userEvent.setup();

    // init supporting data & function
    const variant: Variant = "primary";
    let counter: number = 0;
    const handleClick = () => {
      counter += 1;
    }

    // render the component to the DOM
    const { getByText } = render(
      <Button
        variant={variant}
        label={variant}
        isLoading
        onClick={handleClick}
      />
    );

    // trigger user action (click on the button)
    const button = getByText(variant);
    await user.click(button);

    // assert
    expect(counter).toBe(1);
  });
})