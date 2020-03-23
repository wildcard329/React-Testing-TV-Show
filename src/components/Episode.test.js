import React from 'react';
import { render, queryAllByTestId } from "@testing-library/react";
import Episodes from './Episodes';

test("renders without errors", () => {
    render(<Episodes episodes={[]} error="" />);
})

test("renders error message if error is present", () => {
    const { queryByTestId, rerender } = render(
        <Episodes episodes={[]} error="" />
    );

    expect(queryByTestId(/error-message/i)).toBeNull();

    rerender(<Episodes episodes={[]} error="Same error message" />);

    expect(queryByTestId(/error-message/i)).toBeInTheDocument();
});

const mockEpisodeData = [
    {
        someData: 'data'
    },
    {
        someMoreData: 'data'
    }
];


test("Episodes renders the list of episodes", () => {
    const {queryAllByTestId, queryByTestId, rerender } = render(
        <Episodes episodes={[]} error="" />
    );
    expect(queryAllByTestId(/episode-list/i)).toHaveLength(0);

    rerender(<Episodes episodes={mockEpisodeData} error="" />)
    expect(queryAllByTestId(/episode-list/i)).toHaveLength(2);
    expect(queryByTestId(/error-message/i)).toBeNull();
});