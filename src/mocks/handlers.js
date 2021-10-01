import { rest } from 'msw';

export const handlers = [
	rest.post('https://sandbox-api.va.gov/services/veteran_confirmation/v0/status', (req, res, ctx) => {
		const { ssn } = req.body;
		let json;
		if (ssn === '796130115') {
			json = {
				veteran_status: 'confirmed',
			};
		} else if (ssn === '796121200') {
			json = {
				veteran_status: 'not confirmed',
			};
		}
		res(ctx.json(json));
	}),
];
