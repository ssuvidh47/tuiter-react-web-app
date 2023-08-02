import React from "react";
import TuitStats from "./tuit-stats";
import { FaStar } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={75} width={75} src={tuit.image} />
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}>
                            X
                        </i>
                    </div>

                    <div><b>{tuit.userName}</b>  <FaStar size="20" color="blue" /> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div> <br />
                    <div><TuitStats tuit={tuit} /></div>
                </div>

            </div>
        </li>
    );
};

export default TuitItem;
