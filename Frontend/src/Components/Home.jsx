import React from "react";
import PostCard from "./PostCard";
import StoryBar from "./StoryBar";

// Dummy data for demonstration
// ======================================================
// GENERATE 100 DUMMY POSTS
// ======================================================

const dummyPosts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`, // pravatar has ~70 images
  image: `https://picsum.photos/400/300?random=${i + 1}`,
  caption: `This is post number ${i + 1} 🌟`
}));

const dummyStories = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}` // pravatar has ~70 images
}));



const Home = ({ posts = dummyPosts, stories = dummyStories }) => {
  const hasPosts = posts.length > 0;

  return (
    <div>
      <StoryBar stories={stories} />
      <main className="max-w-md mx-auto py-6 space-y-6">


        {!hasPosts ? (
          <p className="text-center text-gray-400">No posts available</p>
        ) : (
          posts.map(post => <PostCard key={post.id} post={post} />)
        )}
      </main>
    </div>
  );
};

export default Home;