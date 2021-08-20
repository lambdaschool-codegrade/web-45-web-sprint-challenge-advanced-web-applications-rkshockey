import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { getByTestId, getByText, queryByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    color: null,
    code: {hex: null}
}

const testColor = {
    color: 'random',
    code: {hex: '4f4f4f'}
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor} />)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const fakeHandleDelete = jest.fn()
    const fakeToggleEdit = jest.fn()

    render (<Color color={testColor}/>)
    const button = getByTestId('delete')
    userEvent.click(button)
    expect(fakeHandleDelete).toBeCalledTimes(1)
    expect(fakeToggleEdit).toBeCalledTimes(1)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const fakesetEditColor = jest.fn()
    const fakeToggleEdit = jest.fn()

    render (<Color color={testColor}/>)
    const div = getByTestId('color')
    userEvent.click(button)
    expect(fakesetEditColor).toBeCalledTimes(1)
    expect(fakeToggleEdit).toBeCalledTimes(1)
});