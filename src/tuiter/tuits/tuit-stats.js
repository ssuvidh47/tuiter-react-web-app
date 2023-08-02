import React, { useState } from "react";
import { FaRegComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';

function TuitStats({ tuit }) {
  const pinkColor = '#FF69B4';
  const [likes, setLikes] = useState(tuit.likes);
  const [isLiked, setIsLiked] = useState(tuit.liked);

  const handleLikeClick = () => {
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setIsLiked(!isLiked);
  };

  return (
    <div className="row">
      <div className="col-3">
        <span>
          <FaRegComment size={20} color="black" /> {" "}
          {tuit.replies}
        </span>
      </div>

      <div className="col-3">
        <span>
          <FaRetweet size={25} color="black" /> {" "}
          {tuit.retuits}
        </span>
      </div>

      <div className="col-3">
        <span>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', borderColor: isLiked ? '#e0245e' : 'transparent' }}
            onClick={handleLikeClick}
          >
            <FaHeart size={20} color={isLiked ? pinkColor : 'black'} />
          </button>
          {likes}
        </span>
      </div>

      <div className="col-3">
        <span>
          <FaShare size={25} />
        </span>
      </div>
    </div>
  );
}

export default TuitStats;
