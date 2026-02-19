import React, { useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";

/* ---------------- RANDOM 50 POSTS ---------------- */

const posts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  verified: Math.random() > 0.6,
  timestamp: `${Math.floor(Math.random() * 7) + 1}h`,
  content:
    Math.random() > 0.5
      ? "Focus on progress, not perfection."
      : "Stay disciplined. Stay dangerous.",
  imageUrl: `https://picsum.photos/600/700?random=${i + 1}`,
  likes: Math.floor(Math.random() * 5000) + 100,
}));

/* ---------------- POST CARD ---------------- */

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-md bg-black text-white border border-gray-800 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${post.username}`}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />

          <div className="flex items-center gap-1 text-sm font-semibold">
            {post.username}
            {post.verified && (
              <FaCheckCircle className="text-blue-500 text-xs" />
            )}
            <span className="text-gray-400 font-normal ml-1">
              • {post.timestamp}
            </span>
          </div>
        </div>

        <button className="text-gray-300 hover:text-white">
          <FaEllipsisH />
        </button>
      </div>

      {/* Image */}
      <div className="w-full bg-black">
        <img
          src={post.imageUrl}
          alt="post"
          loading="lazy"
          className="w-full object-cover max-h-[600px]"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-4 text-xl">
          <button onClick={() => setLiked(!liked)}>
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>

          <button>
            <FaRegComment />
          </button>

          <button>
            <FaPaperPlane />
          </button>
        </div>

        <button className="text-xl">
          <FaRegBookmark />
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 pt-2 font-semibold text-sm">
        {liked ? post.likes + 1 : post.likes} likes
      </div>

      {/* Caption */}
      <div className="px-4 pt-1 pb-4 text-sm">
        <span className="font-semibold mr-2">{post.username}</span>
        {post.content}
      </div>
    </div>
  );
};

/* ---------------- HOME FEED ---------------- */

const Home = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-10 flex flex-col items-center gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
