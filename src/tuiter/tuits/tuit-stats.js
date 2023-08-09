import React, { useState } from "react";
import { FaRegComment, FaRetweet, FaHeart, FaShare,FaThumbsDown } from 'react-icons/fa';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";




function TuitStats({ tuit }) {
  const dispatch = useDispatch();
  const pinkColor = '#FF69B4';
  const [likes, setLikes] = useState(tuit.likes);
  const [isLiked, setIsLiked] = useState(tuit.liked);
  const [dislikes, setDislikes] = useState(tuit.dislikes);
  const [isDisliked, setIsDisliked] = useState(tuit.disliked);

  const handleLikeClick = () => {
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setIsLiked(!isLiked);
  };

  const handleDislikeClick = () => {
    const updatedDislikes = isDisliked ? dislikes - 1 : dislikes + 1;
    setDislikes(updatedDislikes);
    setIsDisliked(!isDisliked);
  };

  return (

    <div className="row">
      <div className="col-2">
        <span>
          <FaRegComment size={20} color="black" /> {" "}
          {tuit.replies}
        </span>
      </div>

      <div className="col-2">
        <span>
          <FaRetweet size={25} color="black" /> {" "}
          {tuit.retuits}
        </span>
      </div>

      <div className="col-2">
        <span>

          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', borderColor: isLiked ? '#e0245e' : 'transparent' }}
            onClick={() => {
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
              handleLikeClick()
            }
            }
          >
            <FaHeart size={20} color={isLiked ? pinkColor : 'black'} />
          </button>
          {likes}
        </span>
      </div>

      <div className="col-2">
        <span>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', borderColor: isDisliked ? '#000000' : 'transparent' }}
            onClick={() => handleDislikeClick()}
          >
            <FaThumbsDown size={20} color={isDisliked ? '#000000' : 'black'} />
          </button>
          {dislikes}
        </span>
      </div>

      <div className="col-1">
        <span>
          <FaShare size={25} />
        </span>
      </div>
    </div>
  );
}

export default TuitStats;
