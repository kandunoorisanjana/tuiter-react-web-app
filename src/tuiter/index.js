import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";


function Tuiter() {
 return (
    <div className="row mt-2">
        <div className="col-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-none d-sm-block">
        <Routes>
         <Route index   element={<HomeComponent/>}/>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
       </Routes>
        </div>
        <div className="col-4 d-none d-lg-block">
            <WhoToFollowList/>
        </div>
    </div>
 )
}

export default Tuiter