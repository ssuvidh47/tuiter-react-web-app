import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "../nav";

function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="a3"
                    element={<Assignment3 />} />
                <Route path="a4"
                    element={<Assignment4 />} />
            </Routes>

        </div>
    );
}
export default Labs;