import { motion } from "framer-motion";
import "./StoryBar.css";

const stories = [
  "ragul",
  "gamer",
  "official",
  "react",
  "frontend",
  "design",
];

const StoryBar = () => {
  return (
    <div className="stories-bar">
      {stories.map((s, i) => (
        <motion.div
          key={i}
          className="story-item"
          whileTap={{ scale: 0.95 }}
        >
          <div className="story-ring">
            <img
              src={`https://ui-avatars.com/api/?name=${s}&background=000&color=fff&size=128`}
              alt={s}
            />
          </div>
          <span className="story-name">{s}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default StoryBar;
