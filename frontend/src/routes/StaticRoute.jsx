import { Routes, Route  } from "react-router-dom";
import HomePage from "../pages/Home/Home.jsx";

function StaticRoute(){

    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    )
}

export default StaticRoute