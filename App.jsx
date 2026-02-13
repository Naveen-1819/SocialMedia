import StoryBar from "./components/StoryBar";
import FeedPost from "./components/FeedPost";
import BottomNav from "./components/BottomNav";

import Sidebar from "./components/Sidebar";
import LikeCommentBox from "./components/LikeCommentBox";

function App() {
  return (
    <div className="insta-app">
      <StoryBar />
      <FeedPost />
      <LikeCommentBox/>
      <BottomNav />
      <Sidebar/>
  
    </div>
  );
}

export default App;
