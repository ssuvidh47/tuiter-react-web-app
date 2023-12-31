import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://www.motortrend.com/uploads/sites/11/2019/11/Tesla-Cybertruck-Electric-Pickup-Truck-Profile-View.jpg?fit=around%7C875:492" className="w-100" />
                <h1 className="position-absolute wd-nudge-up text-white">
                     CyberTruck</h1>
            </div>
            <TuitSummaryList />
        </>
    );
};
export default ExploreScreen;