import React from "react";
import PropTypes from "prop-types";

/**
 * StoryItem Component
 * -------------------
 * Renders a single story circle with a username.
 * - If no story prop is provided, renders nothing.
 * - The circle has a gradient border indicating an active story.
 * - The username is truncated if too long.
 */
const StoryItem = ({ story }) => {
  // Return null if story prop is not provided
  if (!story) return null;

  return (
    <button
      type="button"
      className="flex flex-col items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
      aria-label={`View story of ${story.username}`} // Accessibility for screen readers
    >
      {/* Story avatar with gradient border */}
      <div className="p-1 rounded-full bg-gradient-to-tr  border-gray-900">
        <img
          src={story.avatar}
          alt={`${story.username} story`}
          className="w-23 h-23 rounded-full border p-0.5 border-gray-900 object-cover"
        />
      </div>

      {/* Username under the avatar, truncated if too long */}
      <span className="text-xs mt-1 max-w-[60px] truncate text-center">
        {story.username}
      </span>
    </button>
  );
};

// PropTypes for better type safety
StoryItem.propTypes = {
  story: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoryItem;