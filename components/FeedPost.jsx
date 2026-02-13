import "./InstaUI.css";

const FeedPost = () => {
  return (
    <div className="feed-container">
      <div className="feed-post">

        <div className="reel-wrapper">
          <iframe
            src="https://www.instagram.com/reel/DUiDtv5j7u9/embed"
            allowFullScreen
          ></iframe>
        </div>

        <p className="caption">
          Avg conversation between me and my bros 🤡
        </p>

      </div>
    </div>
  );
};

export default FeedPost;
