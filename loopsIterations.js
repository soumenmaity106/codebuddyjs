// level 2

const fibonacci = (n) => {
	const result = [0, 1];
	for (i = 2; i < n; i++) {
		result[i] = result[i - 2] + result[i - 1];
	}
	return result[i];
};
fibonacci(6);
