import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path="/about" element={<AboutPage/>} />
		</Routes>
	)
}

export default AppRouter;