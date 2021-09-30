import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import StatusChecker from './StatusChecker';

test('renders StatusChecker list title correctly', () => {
	render(<StatusChecker />);

	const title = screen.queryByText('StatusChecker List');
	expect(title).toBeInTheDocument();
});

