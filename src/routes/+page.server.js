import { json } from '@sveltejs/kit';

export const actions = {
	default: () => {
		return json({ a: 1 });
	}
};
