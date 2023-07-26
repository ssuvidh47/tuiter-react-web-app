import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg' }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 mr-1">
                    <img className="rounded-circle" height={48} width={48} src={who.avatarIcon} />
                </div>
                <div className="col-8 ml-3">
                    <div className="fw-bold ml-3">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;