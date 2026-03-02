import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import PricingPage from "./components/PricingPage/PricingPage";
import BlogPage from "./components/BlogPage/BlogPage";
import TeamPage from "./components/TeamPage/TeamPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/about"} element={<AboutPage />} />
			<Route path={"/service"} element={<ServicePage />} />
			<Route path={"/pricing"} element={<PricingPage />} />
			<Route path={"/blog"} element={<BlogPage />} />
			<Route path={"/team"} element={<TeamPage/>} />
		</Routes>
	)
}

export default AppRouter;