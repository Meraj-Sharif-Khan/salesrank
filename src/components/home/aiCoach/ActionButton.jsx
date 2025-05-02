import React from "react";
import restoreIcon from "../../../assets/icons/rotate.svg";
import likeIcon from "../../../assets/icons/like.svg";
import dislikeIcon from "../../../assets/icons/dislike.svg";
import pastIcon from "../../../assets/icons/past.svg";
import recordIcon from "../../../assets/icons/sound.svg";

const ActionButton = () => {
  return (
    <div className="inline-block">
      <div className="p-2 lg:p-6 flex flex-row lg:flex-col flex-nowrap gap-10 bg-white rounded-full shrink-0">
        <button className="shrink-0">
          <img
            className="h-6 w-6 object-scale-down"
            src={restoreIcon}
            alt="restore Icon"
          />
        </button>
        <button className="shrink-0">
          <img
            className="h-6 w-6 object-scale-down"
            src={likeIcon}
            alt="like Icon"
          />
        </button>
        <button className="shrink-0">
          <img
            className="h-6 w-6 object-scale-down"
            src={dislikeIcon}
            alt="dislike Icon"
          />
        </button>
        <button className="shrink-0">
          <img
            className="h-6 w-6 object-scale-down"
            src={pastIcon}
            alt="past Icon"
          />
        </button>
        <button className="shrink-0">
          <img
            className="h-6 w-6 object-scale-down"
            src={recordIcon}
            alt="recordIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
