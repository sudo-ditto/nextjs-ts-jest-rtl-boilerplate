import HomePage from '../../pages/index';
import React from 'react';
import { render, screen } from 'test-utils';

describe('HomePage', () => {
    it('should render the heading', () => {
        const textToFind = 'Next.js!';

        render(<HomePage />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });
});
