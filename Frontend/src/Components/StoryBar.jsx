import React from "react";
import StoryItem from "./StoryItem";

const StoryBar = ({ stories = [] }) => {
  if (!Array.isArray(stories) || stories.length === 0) return null;

  return (
    <section className="border-b border-gray-800 mx-40 pb-4 hide-scrollbar" aria-label="User stories">
      <div className="flex gap-4 overflow-x-auto px-2 hide-scrollba">
        {stories.map(story => <StoryItem key={story.id} story={story} />)}
      </div>
    </section>
  );
};

export default StoryBar;