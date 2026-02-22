import React from "react";
import PostCard from "./PostCard";
import StoryBar from "./StoryBar";

// ======================================================
// IMPORT MOCK DATA
// ======================================================
// This imports the structured post data you created in your
// separate mock data file. The posts array has 100 realistic
// Instagram-style posts ready to render in PostCard components.
import { posts as generatedPosts } from "../Database/posts"; // replace "./mockPosts" with your file path

// ======================================================
// DUMMY STORIES DATA
// ======================================================
// Creating 20 dummy story objects for the StoryBar component.
// Each story has a unique id, username, and avatar.
const dummyStories = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`
}));

// ======================================================
// HOME COMPONENT
// ======================================================
// Renders the Instagram-style feed with StoryBar and PostCards.
// Accepts posts and stories as props, but defaults to our
// generated posts and dummy stories if none are passed.
const Home = ({ posts = generatedPosts, stories = dummyStories }) => {
  const hasPosts = posts.length > 0;

  return (
    <div className="">
      {/* StoryBar displays the top horizontal story feed */}
      <StoryBar stories={stories} />

      {/* Main feed container */}
      <main className="max-w-md mx-auto py-6 space-y-6">
        {!hasPosts ? (
          <p className="text-center text-gray-400">No posts available</p>
        ) : (
          // Loop through posts and render a PostCard for each
          posts.map(post => <PostCard key={post.id} post={post} />)
        )}
      </main>
    </div>
  );
};

export default Home;