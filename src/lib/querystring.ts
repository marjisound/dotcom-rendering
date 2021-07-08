const constructQuery = (query: Record<string, any>): string =>
	Object.keys(query)
		.map((param: string) => {
			const value = query[param];
			const queryValue = Array.isArray(value)
				? value.map((v) => encodeURIComponent(v)).join(',')
				: encodeURIComponent(value);
			return `${param}=${queryValue}`;
		})
		.join('&');

export { constructQuery };
