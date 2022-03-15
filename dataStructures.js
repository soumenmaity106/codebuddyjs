// level 2

// 1)
const removeEvens = (numbers) => {
	return numbers.filter((n) => n % 2 !== 0);
};
const arr = [1, 3, 4, 6, 7, 8];
removeEvens(arr);

// 2)
const UpperCase = (strings) => {
	let array = strings.split("");
	let uppercase = [];
	array.map((item) => {
		uppercase.push(item.toUpperCase());
	});
	return uppercase.join();
};
UpperCase("Elie");

//3
const MaxNumber = (array) => {
	return array.sort((a, b) => {
		return b - a;
	})[0];
};
MaxNumber([1, 3, 4, 6, 7, 8, 2, 5]);
