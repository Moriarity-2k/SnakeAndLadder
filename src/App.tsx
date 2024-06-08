import { Toaster } from "react-hot-toast";
import { Board } from "./Components/Board";

export default function App() {
	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<Board />
		</>
	);
}
