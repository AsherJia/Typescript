interface SquareConfig {
	color?: string,
	width?: number,
}

function createSquare(config: SquareConfig): {color: string, area:number} {
	let result = { color: 'red', area: 100 };
	if (config.color) {
		result.color = config.color;
	}

	if (config.width) {
		result.area = config.width * config.width;
	}

	return result;
}

export { createSquare, SquareConfig };