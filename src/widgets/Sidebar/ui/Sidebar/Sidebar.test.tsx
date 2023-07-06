import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('toggle-button');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});