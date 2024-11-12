import { render, screen } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
    test('renders Home page by default', () => {
      render(
            <App />
    );
        expect(screen.getByText('Welcome to Fruit Market')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText(/© Fruit Market/i)).toBeInTheDocument();
    });
});
