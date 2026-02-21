// ======================================================
// POST CARD COMPONENT
// ======================================================

import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => setLiked(prev => !prev);

  return (
    <article className="border border-gray-800 rounded-xl overflow-hidden bg-black text-white">
      {/* Header */}
      <header className="flex items-center gap-3 p-3">
        <img src={post.avatar} alt={`${post.username} profile`} className="w-8 h-8 rounded-full object-cover" />
        <span className="font-semibold text-sm">{post.username}</span>
      </header>

      {/* Image */}
      <img src={post.image} alt={`${post.username} post`} className="w-full object-cover" />

      {/* Action Buttons */}
      <section className="p-3 flex gap-5 text-xl items-center">
        <button onClick={handleLikeToggle} aria-label={liked ? "Unlike post" : "Like post"} aria-pressed={liked}>
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
        <button aria-label="Comment on post"><FaRegComment /></button>
        <button aria-label="Share post"><FaPaperPlane /></button>
      </section>

      {/* Caption */}
      <section className="px-3 pb-4 text-sm">
        <span className="font-semibold mr-2">{post.username}</span>
        <span>{post.caption}</span>
      </section>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
};

export default PostCard;