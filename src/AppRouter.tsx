import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import PricingPage from "./components/PricingPage/PricingPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/about"} element={<AboutPage />} />
			<Route path={"/service"} element={<ServicePage />} />
			<Route path={"/pricing"} element={<PricingPage/> } />
		</Routes>
	)
}

export default AppRouter;