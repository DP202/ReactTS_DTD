import React from "react";

const formatDate = (date) => {
  return new Date(date).toTimeString();
};

function Comment(props) {
  return (
    <div className="comment">
      <div className="userInfo">
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div className="userInfo-name">{props.author.name}</div>
      </div>
      <div className="comentText">{props.text}</div>
      <div className="commentDate">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
