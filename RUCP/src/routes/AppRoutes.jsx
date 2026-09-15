import {
	Routes,
	Route
}
	from "react-router-dom";

import Home from "../pages/Home"
import Members from "../pages/Members";
import MemberProfile from "../pages/MemberProfile";
import Rankings from "../pages/Rankings";
import Academy from "../pages/Academy";

// import Achievements from "../pages/Achievements";
// import Reports from "../pages/Reports";
// import Sessions from "../pages/Sessions";


function AppRoutes() {


	return (

		<Routes>


			<Route
				path="/"
				element={<Home />}
			/>


			<Route
				path="/members"
				element={<Members />}
			/>


			<Route
				path="/members/:id"
				element={<MemberProfile />}
			/>


			<Route
				path="/rankings"
				element={<Rankings />}
			/>

			<Route 
				path="/academy"
				element={ <Academy/> }
			/>

			{/* <Route
				path="/achievements"
				element={<Achievements />}
			/>


			<Route
				path="/reports"
				element={<Reports />}
			/>


			<Route
				path="/sessions"
				element={<Sessions />}
			/> */}



		</Routes>


	)

}


export default AppRoutes;