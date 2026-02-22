// ======================================================
// POST CARD — PRODUCTION READY COMPONENT
// Clean, accessible, maintainable, scalable version
// ======================================================

import React, { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import "remixicon/fonts/remixicon.css";

/* ======================================================
   COMPONENT
   Displays a social media style post card with:
   ✔ Like / Save interaction
   ✔ Double tap animation
   ✔ Expandable caption
   ✔ Keyboard accessibility
   ✔ Clean UI structure
====================================================== */

const PostCard = ({ post }) => {

  /* ----------------------------------------------------
     STATE MANAGEMENT
     Controls interactive UI behavior
     liked      → user liked the post
     saved      → post bookmarked
     showHeart  → double tap animation visibility
     expanded   → caption expanded/collapsed
  ---------------------------------------------------- */
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [expanded, setExpanded] = useState(false);

  /* ----------------------------------------------------
     REF — ANIMATION CONTROL
     Stores timeout ID to prevent memory leaks
  ---------------------------------------------------- */
  const animationTimeout = useRef(null);


  /* ----------------------------------------------------
     DERIVED VALUES
     Values calculated from props + state
  ---------------------------------------------------- */
  const baseLikes = post.likes ?? 0;
  const likeCount = liked ? baseLikes + 1 : baseLikes;
  const commentCount = post.commentsCount ?? 0;

  const MAX_CAPTION_LENGTH = 110;
  const isCaptionLong = post.caption.length > MAX_CAPTION_LENGTH;


  /* ----------------------------------------------------
     EVENT HANDLERS
     Memoized to avoid unnecessary re-renders
  ---------------------------------------------------- */

  // Toggle like state
  const handleLikeToggle = useCallback(() => {
    setLiked(prev => !prev);
  }, []);

  // Toggle save/bookmark
  const handleSaveToggle = useCallback(() => {
    setSaved(prev => !prev);
  }, []);

  // Double tap like animation
  const handleDoubleTap = useCallback(() => {
    if (!liked) setLiked(true);

    setShowHeart(true);

    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }

    animationTimeout.current = setTimeout(() => {
      setShowHeart(false);
    }, 700);
  }, [liked]);


  /* ----------------------------------------------------
     CLEANUP EFFECT
     Clears timeout when component unmounts
     Prevents memory leaks
  ---------------------------------------------------- */
  useEffect(() => {
    return () => {
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);


  /* ----------------------------------------------------
     KEYBOARD ACCESSIBILITY
     Enables keyboard users to trigger image interaction
  ---------------------------------------------------- */
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDoubleTap();
    }
  };


  /* ======================================================
     UI RENDER
     ====================================================== */

  return (
    <article
      className="rounded-xl overflow-hidden bg-black text-white max-w-md w-full shadow-lg"
      aria-label={`Post by ${post.username}`}
    >

      {/* --------------------------------------------------
         HEADER
         Avatar + username + verification badge
      -------------------------------------------------- */}

      <header className="flex items-center justify-between p-3">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">

          {/* Avatar with Instagram gradient ring */}
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <img
              src={post.avatar}
              alt={`${post.username} profile`}
              className="w-8 h-8 rounded-full object-cover border cursor-pointer border-black"
              loading="lazy"
            />
          </div>

          {/* Username + verified + time */}
          <div className="flex items-center gap-1 text-sm">

            <span className="font-semibold cursor-pointer hover:opacity-70">
              {post.username}
            </span>

            {post.verified && (
              <span
                className="text-blue-500 text-xl"
                aria-label="Verified account"
                title="Verified account"
              >
                <i class="ri-verified-badge-fill"></i>
              </span>
            )}

            <span className="text-gray-400">•</span>

            <span className="text-gray-400">3d</span>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Follow button */}
          <button
            className="text-blue-500 font-semibold cursor-pointer text-sm hover:opacity-70"
            aria-label="Follow user"
          >
            Follow
          </button>

          {/* More options */}
          <button
            aria-label="More options"
            className="text-xl cursor-pointer hover:opacity-70"
          >
            <i class="ri-more-line"></i>
          </button>

        </div>
      </header>

      {/* --------------------------------------------------
         POST IMAGE
         Supports double tap like + keyboard trigger
      -------------------------------------------------- */}
      <div
        className="relative w-full aspect-square select-none"
        onDoubleClick={handleDoubleTap}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label="Post image"
      >
        <img
          src={post.image}
          alt={`${post.username} post`}
          className="w-full h-full rounded-md object-cover"
          loading="lazy"
        />

        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaHeart className="text-white text-7xl animate-[likePop_0.7s_ease]" />
          </div>
        )}
      </div>


      {/* --------------------------------------------------
         ACTION BAR
         Like / Comment / Share / Save
      -------------------------------------------------- */}
      <section className="p-3 flex justify-between items-center text-xl">

        {/* LEFT ACTIONS */}
        <div className="flex gap-5 items-center">

          {/* LIKE BUTTON */}
          <button
            onClick={handleLikeToggle}
            aria-label={liked ? "Unlike post" : "Like post"}
            aria-pressed={liked}
            className="active:scale-90 transition hover:opacity-70 cursor-pointer"
          >
            {liked
              ? <i className="ri-heart-fill text-red-500"></i>
              : <i className="ri-heart-line"></i>
            }
            <span className="ml-1 text-sm">
              {likeCount.toLocaleString()}
            </span>
          </button>

          {/* COMMENT BUTTON */}
          <button
            aria-label="Comment on post"
            className="hover:opacity-70 cursor-pointer"
          >
            <i className="ri-chat-3-line"></i>
            <span className="ml-1 text-sm">
              {commentCount.toLocaleString()}
            </span>
          </button>

          {/* SHARE BUTTON */}
          <button
            aria-label="Share post"
            className="hover:opacity-70 cursor-pointer"
          >
            <i class="ri-send-ins-line"></i>
          </button>
        </div>


        {/* RIGHT ACTIONS */}
        <button
          onClick={handleSaveToggle}
          aria-label={saved ? "Unsave post" : "Save post"}
          aria-pressed={saved}
          className="text-xl hover:opacity-70 cursor-pointer"
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </section>


      {/* --------------------------------------------------
         CAPTION SECTION
         Expandable caption for long text
      -------------------------------------------------- */}
      <section className="px-3 pb-3 text-sm leading-snug">
        <span className="font-semibold mr-2 cursor-pointer">
          {post.username}
        </span>

        <span className="whitespace-pre-line">
          {expanded || !isCaptionLong
            ? post.caption
            : post.caption.slice(0, MAX_CAPTION_LENGTH)}
        </span>

        {isCaptionLong && (
          <button
            onClick={() => setExpanded(prev => !prev)}
            aria-expanded={expanded}
            className="ml-1 text-gray-400 hover:text-gray-300"
          >
            {expanded ? " less" : "... more"}
          </button>
        )}
      </section>

    </article>
  );
};


/* ======================================================
   PROP TYPES
   Validates data structure from parent component
====================================================== */
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.number,
    commentsCount: PropTypes.number,
    verified: PropTypes.bool
  }).isRequired
};

export default PostCard;