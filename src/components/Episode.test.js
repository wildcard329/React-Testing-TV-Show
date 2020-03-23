import React from 'react';
import { render } from "@testing-library/react";
import Episodes from './Episodes';

test("renders without errors", () => {
    render(<Episodes episodes={[]} error="" />);
})

test("renders error message if error is present", () => {
    const { queryByTestId, rerender } = render(
        <Episodes episodes={[]} error="" />
    )
})