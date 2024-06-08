import { useState } from "react";
import { Players, RandomNumber } from "../utils/utils";
import { Blocks } from "react-loader-spinner";
import {
    GiInvertedDice1,
    GiInvertedDice2,
    GiInvertedDice3,
    GiInvertedDice4,
    GiInvertedDice5,
    GiInvertedDice6
} from "react-icons/gi";


export function PlayerIntro({
    rollDice, currentPlayer,
}: {
    currentPlayer: Players;
    rollDice: (randomNumber: number) => void;
}) {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <div className="flex items-center gap-8">
            <div>
                {currentPlayer === Players.a
                    ? "Player 1's turn"
                    : "Player 2's turn"}
            </div>
            <div>
                <button
                    className="cursor-pointer border font-mono uppercase text-black bg-[#f7e3e3] px-4 py-2"
                    onClick={() => {
                        const randomNumbe = RandomNumber(1, 6);
                        setRandomNumber(randomNumbe);
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            rollDice(randomNumbe);
                        }, 1000);
                    }}
                >
                    ROLL 🎲
                </button>
            </div>
            {randomNumber != null && (
                <div>
                    {loading ? (
                        <Blocks
                            height="30"
                            width="30"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true} />
                    ) : randomNumber === 1 ? (
                        <GiInvertedDice1 className="text-lg" />
                    ) : randomNumber === 2 ? (
                        <GiInvertedDice2 className="text-lg" />
                    ) : randomNumber === 3 ? (
                        <GiInvertedDice3 className="text-lg" />
                    ) : randomNumber === 4 ? (
                        <GiInvertedDice4 className="text-lg" />
                    ) : randomNumber === 5 ? (
                        <GiInvertedDice5 className="text-lg" />
                    ) : (
                        <GiInvertedDice6 className="text-lg" />
                    )}
                </div>
            )}
        </div>
    );
}
