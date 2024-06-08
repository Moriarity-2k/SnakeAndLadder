import { Toaster } from "react-hot-toast";
import { Board } from "./Components/Board";

export default function App() {
	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />

			{/* Board rendering the ueer Intro , snake and ladder board, players  */}
			<Board />
		</>
	);
}
