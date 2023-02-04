import Navbar from "./Components/Navbar";
import Predict from "./Predict";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Store from "./Config/Store";
import SuggestedRole from "./SuggestedRole";
import JobSearch from "./JobSearch";
import JobRoles from "./JobRoles";
import JobDetails from "./Components/JobDetails";
import RoadMaps from "./RoadMaps";
import RoadMapDetail from "./Components/RoadMapDetail";
function App() {
	return (
		<Store>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/predict" element={<Predict />} />
						<Route path="/role" element={<SuggestedRole />} />
						<Route path="/job-search" element={<JobSearch />} />
						<Route path="/job-roles" element={<JobRoles />} />
						<Route path="/job-roles/:id" element={<JobDetails />} />
						<Route path="/roadmaps" element={<RoadMaps />} />
						<Route path="/roadmaps/:id" element={<RoadMapDetail />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Store>
	);
}

export default App;
