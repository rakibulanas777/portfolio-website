import { useEffect } from "react";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import "./App.css";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<div className="preloader_center">
					<PropagateLoader color="yellow" animation="slide-right" />
				</div>
			) : (
				<>
					<Navbar />
					<Header />
				</>
			)}
		</div>
	);
}

export default App;
