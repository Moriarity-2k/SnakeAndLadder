import { Players, coincidePlayerError } from "../utils/utils";

/**
 * custom individual player and their positions based on the player's score
 * @param player : player score
 * @param windowSize : Responsive player size
 * @param name ; curreent player
 * @returns
 */
export function Player({
	player,
	name,
	windowSize,
}: {
	windowSize: number;
	player: number;
	name: Players;
}) {
	if (player === 0) return;
	return (
		<div
			className="text-black rounded-full px-[8px] py-[2px] md:px-[16px] md:py-[10px]"
			style={{
				transition: "linear 1s",
				backgroundColor: `${name ? "#296dffe8" : "#ff2929"}`,
				position: "absolute",
				bottom:
					name * coincidePlayerError + player === 0
						? 0
						: Math.floor(windowSize / 10) *
						Math.floor((player - 1) / 10),
				left:
					name * coincidePlayerError +
					Math.floor(windowSize / 10) *
						(player !== 0 && Math.floor((player - 1) / 10) & 1
							? 9 - Math.floor((player - 1) % 10)
							: Math.floor((player - 1) % 10)),
			}}
		>
			{name + 1}
		</div>
	);
}
