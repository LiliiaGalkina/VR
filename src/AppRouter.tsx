import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import PricingPage from "./components/PricingPage/PricingPage";
import BlogPage from "./components/BlogPage/BlogPage";
import TeamPage from "./components/TeamPage/TeamPage";
import FaqPage from "./components/FaqPage/FaqPage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import ContactUsPage from "./components/ContactUs/ContactUsPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/about"} element={<AboutPage />} />
			<Route path={"/service"} element={<ServicePage />} />
			<Route path={"/pricing"} element={<PricingPage />} />
			<Route path={"/blog"} element={<BlogPage />} />
			<Route path={"/team"} element={<TeamPage/>} />
			<Route path={"/faq"} element={<FaqPage/>}/>
			<Route path={"/policy"} element={<PrivacyPolicy/>}/>
			<Route path={`/blog/:elemId`} element={<BlogDetail/>}/>
			<Route path="/contacts" element={<ContactUsPage/>}/>
		</Routes>
	)
}

export default AppRouter;