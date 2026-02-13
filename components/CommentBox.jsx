import React from "react";

const CommentBox = () => {
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  const addComment = () => {
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div className="mt-3">
      <input
        className="form-control"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add comment"
      />
      <button className="btn btn-success mt-2" onClick={addComment}>
        Comment
      </button>

      {comments.map((c, i) => (
        <p key={i}>💬 {c}</p>
      ))}
    </div>
  );
};

export default CommentBox;
