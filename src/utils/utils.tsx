export const snakeIndices = [
	{ from: 99, to: 41 },
	{ from: 89, to: 53 },
	{ from: 76, to: 58 },
	{ from: 66, to: 45 },
	{ from: 54, to: 31 },
	{ from: 43, to: 18 },
	{ from: 40, to: 3 },
	{ from: 27, to: 5 },
];

export const ladderIndices = [
	{ from: 4, to: 25 },
	{ from: 13, to: 46 },
	{ from: 33, to: 49 },
	{ from: 42, to: 63 },
	{ from: 50, to: 69 },
	{ from: 62, to: 81 },
	{ from: 74, to: 92 },
];

export const coincidePlayerError = 10;

export enum Players {
	a,
	b,
}

export function RandomNumber(a: number, b: number) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

export function checkForSnakesAndLadders(updatedNumber: number) {
	for (const snake of snakeIndices) {
		if (snake.from === updatedNumber) {
			return {
				updatedNumber: snake.to,
				message: `Oh no! You got bitten by a snake 🐍🐍 and slide down to ${snake.to}.`,
                ladder : 0
			};
		}
	}

	for (const ladder of ladderIndices) {
		if (ladder.from === updatedNumber) {
			return {
				updatedNumber: ladder.to,
				message: `Yay! You climbed a ladder 🪜🪜🪜 and moved up to ${ladder.to}.`,
                ladder : 1
			};
		}
	}

	return { updatedNumber: updatedNumber, message: "" };
}
