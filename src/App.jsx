import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import MeetingRoom from './Pages/MeetingRoom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/>} />
				<Route path="/room"  element={ <MeetingRoom/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
