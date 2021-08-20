import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { findAllByTestId, render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';

jest.mock('../services/fetchColorService.js')

const testColors = {
    data: [
        {
            color: 'random',
            code: {hex: '4f4f4f'}
        },
        {
            color: 'random2',
            code: {hex: '0a0a0a'}
        }
    ]
}

test("Renders without errors", ()=> {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    fetchColorService.mockResolvedValueOnce(testColors)

    render(<BubblePage />)
    const colors = await screen.findAllByTestId('color')
    expect(colors).toHaveLength(2)
});