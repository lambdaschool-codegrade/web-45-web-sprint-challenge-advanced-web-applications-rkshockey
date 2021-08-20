import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { queryByTestId, render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import EditMenu from './EditMenu';

const emptyColors = [
    {
        color: null,
        code: {hex: null}
    },
    {
        color: null,
        code: {hex: null}
    }
]

const testColors = [
    {
        color: 'random',
        code: {hex: '4f4f4f'}
    },
    {
        color: 'random2',
        code: {hex: '0a0a0a'}
    }
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={emptyColors}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const {rerender} = render(<ColorList colors={testColors} editing={false}/>)
    const editMenu = screen.queryByTestId('edit_menu')
    expect(editMenu).not.toBeInTheDocument
    rerender(<ColorList colors={testColors} editing={true}/>)
    expect(editMenu).toBeInTheDocument
});
