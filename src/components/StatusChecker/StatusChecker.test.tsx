import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StatusChecker from './StatusChecker';

test('renders StatusChecker list title correctly', () => {
	render(<StatusChecker />);

	const title = screen.queryByText('VA Status Checker');
	expect(title).toBeInTheDocument();
});

test('correctly displays a confirmed status', async () => {
	render(<StatusChecker />);

	const firstNameInput = screen.getByLabelText('First Name');
	userEvent.clear(firstNameInput);
	userEvent.type(firstNameInput, 'Ellis');

	const middleNameInput = screen.getByLabelText('Middle Name');
	userEvent.clear(middleNameInput);
	userEvent.type(middleNameInput, 'E');

	const lastNameInput = screen.getByLabelText('Last Name');
	userEvent.clear(lastNameInput);
	userEvent.type(lastNameInput, 'Tamara');

	const genderInput = screen.getByLabelText('Gender');
	userEvent.clear(genderInput);
	userEvent.type(genderInput, 'F');

	const birthDateInput = screen.getByLabelText('Birth Date');
	userEvent.clear(birthDateInput);
	userEvent.type(birthDateInput, '1967-06-19');

	const ssnInput = screen.getByLabelText('SSN');
	userEvent.clear(ssnInput);
	userEvent.type(ssnInput, '796130115');

	const button = screen.getByRole('button', { name: 'Submit' });
	userEvent.click(button);

	const status = await screen.findByText(/Status:/i);
	expect(status).toHaveTextContent('confirmed');
});

test('correctly displays a not confirmed status', async () => {
	render(<StatusChecker />);

	const firstNameInput = screen.getByLabelText('First Name');
	userEvent.clear(firstNameInput);
	userEvent.type(firstNameInput, 'Greg');

	const middleNameInput = screen.getByLabelText('Middle Name');
	userEvent.clear(middleNameInput);
	userEvent.type(middleNameInput, 'A');

	const lastNameInput = screen.getByLabelText('Last Name');
	userEvent.clear(lastNameInput);
	userEvent.type(lastNameInput, 'Anderson');

	const genderInput = screen.getByLabelText('Gender');
	userEvent.clear(genderInput);
	userEvent.type(genderInput, 'M');

	const birthDateInput = screen.getByLabelText('Birth Date');
	userEvent.clear(birthDateInput);
	userEvent.type(birthDateInput, '1933-04-05');

	const ssnInput = screen.getByLabelText('SSN');
	userEvent.clear(ssnInput);
	userEvent.type(ssnInput, '796121200');

	const button = screen.getByRole('button', { name: 'Submit' });
	userEvent.click(button);

	const status = await screen.findByText(/Status:/i);
	expect(status).toHaveTextContent('not confirmed');
});
