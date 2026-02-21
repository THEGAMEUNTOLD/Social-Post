// ==============================
// IMPORTS
// ==============================

import React, { useMemo, useState } from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";

// React → UI library
// useMemo → Prevents re-generating posts each render
// useState → Handles like state
// React Icons → UI action icons


// ==============================
// MOCK DATA GENERATOR
// ==============================

function generatePosts(count = 50) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: `user${index + 1}`,
    verified: Math.random() > 0.6,
    timestamp: `${Math.floor(Math.random() * 7) + 1}h`,
    content:
      Math.random() > 0.5
        ? "Focus on progress, not perfection."
        : "Stay disciplined. Stay dangerous.",
    imageUrl: `https://picsum.photos/600/700?random=${index}`,
    likes: Math.floor(Math.random() * 5000) + 100,
  }));
}

// Creates mock social posts
// Extracted for reuse + cleaner component logic


// ==============================
// POST CARD COMPONENT
// ==============================

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked((prev) => !prev);
  }

  // liked → Local UI state
  // toggleLike → Safe state update pattern

  return (
    <article className="w-full max-w-md bg-black text-white border border-gray-800 rounded-xl overflow-hidden">

      {/* ==============================
          POST HEADER
      ============================== */}

      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${post.username}`}
            alt={`${post.username} avatar`}
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

        <button
          className="text-gray-300 hover:text-white"
          aria-label="More options"
        >
          <FaEllipsisH />
        </button>
      </header>

      {/* Shows user info + timestamp */}


      {/* ==============================
          POST IMAGE
      ============================== */}

      <div className="w-full bg-black">
        <img
          src={post.imageUrl}
          alt="Post content"
          loading="lazy"
          className="w-full object-cover max-h-[600px]"
        />
      </div>

      {/* Lazy loading improves performance */}


      {/* ==============================
          ACTION BUTTONS
      ============================== */}

      <div className="flex items-center justify-between px-4 pt-3">

        <div className="flex items-center gap-4 text-xl">
          <button onClick={toggleLike} aria-label="Like post">
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>

          <button aria-label="Comment">
            <FaRegComment />
          </button>

          <button aria-label="Share">
            <FaPaperPlane />
          </button>
        </div>

        <button className="text-xl" aria-label="Save post">
          <FaRegBookmark />
        </button>

      </div>

      {/* Social actions section */}


      {/* ==============================
          LIKE COUNT
      ============================== */}

      <div className="px-4 pt-2 font-semibold text-sm">
        {liked ? post.likes + 1 : post.likes} likes
      </div>

      {/* Updates UI instantly on like */}


      {/* ==============================
          CAPTION
      ============================== */}

      <div className="px-4 pt-1 pb-4 text-sm">
        <span className="font-semibold mr-2">{post.username}</span>
        {post.content}
      </div>

      {/* Post description */}

    </article>
  );
}


// ==============================
// HOME FEED COMPONENT
// ==============================

function Home() {
  const posts = useMemo(() => generatePosts(100), []);

  // Generates feed once
  // Prevents re-render flicker

  return (
    <main className="min-h-screen bg-black pt-20 pb-10 flex flex-col items-center gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );

  // Central feed container
  // Vertical stacked post layout
}


// ==============================
// EXPORT
// ==============================

export default Home;

// Makes Home available to routes