import { useState, useEffect } from "react";
import { Players, checkForSnakesAndLadders } from "../utils/utils";
import toast from "react-hot-toast";
import { Player } from "./Player";
import { PlayerIntro } from "./PlayerIntro";

export function Board() {
    const [windowSize, setWindowSize] = useState<number>(
        window.innerWidth > 800 ? 600 : window.innerWidth * 0.8
    );

    useEffect(() => {
        function handleResize() {
            setWindowSize(
                window.innerWidth > 800 ? 600 : window.innerWidth * 0.8
            );
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [player1, setPlayer1] = useState<number>(0);
    const [player2, setPlayer2] = useState<number>(0);

    const [currentPlayer, setCurrentPlayer] = useState<Players | null>(null);

    function reset() {
        setPlayer1(0);
        setPlayer2(0);
        setCurrentPlayer(null);
    }

    function RollDice(randomNumber: number) {
        if (currentPlayer === Players.a) {
            const { updatedNumber, message } = checkForSnakesAndLadders(
                randomNumber + player1
            );
            if (message.length) {
                toast(message, { duration: 1 });
            }

            if (updatedNumber > 100) {
                toast(`You need ${100 - player1} to win`);
                return;
            } else if (updatedNumber === 100) {
                toast.success("Congratulation !!! Player 1 has won 👏🏻👏🏻👏🏻");
                reset();
                return;
            }
            setPlayer1(updatedNumber);
        } else {
            const { updatedNumber, message } = checkForSnakesAndLadders(
                randomNumber + player2
            );
            if (message.length) toast(message);

            if (updatedNumber > 100) {
                toast(`You need ${100 - player2} to win`);
                return;
            } else if (updatedNumber === 100) {
                toast.success("Congratulation !!! Player 2 has won 👏🏻👏🏻👏🏻");
                reset();
                return;
            }
            setPlayer2(updatedNumber);
        }
        setCurrentPlayer((prev) => prev === Players.a ? Players.b : Players.a
        );
    }

    return (
        <div className="h-screen bg-[#f7efef] py-16 flex flex-col items-center justify-center gap-8 text-black w-screen">
            <div>
                {currentPlayer === null ? (
                    <button
                        className="cursor-pointer border font-mono uppercase text-black bg-[#f7e3e3] px-4 py-2"
                        onClick={() => {
                            setCurrentPlayer(Players.a);
                        }}
                    >
                        start
                    </button>
                ) : (
                    <PlayerIntro
                        rollDice={RollDice}
                        currentPlayer={currentPlayer} />
                )}
            </div>
            <div
                className="relative flex flex-col-reverse items-center justify-end p-2 gap-4 border-2 text-black border-black"
                style={{
                    transition: "ease-in-out 2s",
                    backgroundImage: "url('main-bg.png')",
                    backgroundSize: "cover",
                    height: `${windowSize}px`,
                    width: `${windowSize}px`,
                }}
            >
                {currentPlayer != null && (
                    <>
                        <Player
                            windowSize={windowSize}
                            player={player1}
                            name={Players.a} />
                        <Player
                            windowSize={windowSize}
                            player={player2}
                            name={Players.b} />
                    </>
                )}
            </div>
        </div>
    );
}
