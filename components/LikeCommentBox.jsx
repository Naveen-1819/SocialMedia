import { useEffect, useState } from "react";
import './LikeCommentBox.css'
const LikeCommentBox = ({ postId }) => {
  const STORAGE_KEY = `post-${postId}`;

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
      setLiked(savedData.liked);
      setLikes(savedData.likes);
      setComments(savedData.comments || []);
    }
  }, [STORAGE_KEY]);

  // Save to localStorage
  const saveToStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

 const handleLike = () => {
  const newLikes = likes + 1; // always add 1

  setLikes(newLikes);

  saveToStorage({
    liked: true, // optional, just mark liked
    likes: newLikes,
    comments,
  });
};


  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const updatedComments = [...comments, comment];

    setComments(updatedComments);
    setComment("");

    saveToStorage({
      liked,
      likes,
      comments: updatedComments,
    });
  };

  return (
    <div className="like-comment-box">
      {/* Actions */}
      <div className="actions">
        <span onClick={handleLike} className="like-btn">
          {liked ? "❤️" : "🤍"}
        </span>
      </div>

      {/* Likes */}
      <p className="likes-count">{likes} likes</p>

      {/* Comments */}
      <div className="comments">
        {comments.map((c, i) => (
          <p key={i} className="comment">
            <strong>user</strong> {c}
          </p>
        ))}
      </div>

      {/* Comment input */}
      <form onSubmit={handleComment} className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default LikeCommentBox;
