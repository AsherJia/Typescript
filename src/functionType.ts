interface ISum {
	(value1: number, value2: number): number;
}

let sumFunc: ISum;
sumFunc = (value1, value2) => {
	return value1 + value2;
}

export default sumFunc;