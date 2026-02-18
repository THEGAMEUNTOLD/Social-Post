import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// 10 Dummy posts data
const posts = [
  {
    id: 1,
    author: "May Aygun",
    username: "mayaygun",
    verified: true,
    timestamp: "2d",
    content: "How to stop chasing and start attracting",
    imageUrl: "https://i.pinimg.com/736x/64/bc/7f/64bc7f840af494e8fe82ff81c6ddd6b5.jpg",
    likes: 1200,
    comments: 10,
  },
  {
    id: 2,
    author: "John Doe",
    username: "johndoe",
    verified: false,
    timestamp: "5h",
    content: "Creativity is allowing yourself to make mistakes.",
    imageUrl: "https://i.pinimg.com/736x/86/71/b5/8671b5da1d001d1e8508aa86184aa37a.jpg",
    likes: 900,
    comments: 5,
  },
  {
    id: 3,
    author: "Alice Smith",
    username: "alice_s",
    verified: false,
    timestamp: "1w",
    content: "",
    imageUrl: "https://i.pinimg.com/1200x/90/b6/1a/90b61a2aab1a2d671d2c39119f979dd9.jpg",
    likes: 450,
    comments: 3,
  },
  {
    id: 4,
    author: "Bob Marley",
    username: "bobmarley",
    verified: true,
    timestamp: "3d",
    content: "Life is what happens when you're busy making other plans.",
    imageUrl: "https://i.pinimg.com/1200x/20/86/4b/20864b3161a9f8d324832420e8001a29.jpg",
    likes: 3000,
    comments: 120,
  },
  {
    id: 5,
    author: "Emma Watson",
    username: "emmawatson",
    verified: true,
    timestamp: "6h",
    content: "",
    imageUrl: "https://i.pinimg.com/736x/73/09/69/73096959cacf58aa964680bfe631bb64.jpg",
    likes: 1800,
    comments: 45,
  },
  {
    id: 6,
    author: "Charlie Brown",
    username: "charlieb",
    verified: false,
    timestamp: "12h",
    content: "Keep pushing forward.",
    imageUrl: "https://i.pinimg.com/736x/95/e8/77/95e87709c298c3def6c64c06e3295c12.jpg",
    likes: 250,
    comments: 12,
  },
  {
    id: 7,
    author: "Sophia Lee",
    username: "sophialee",
    verified: true,
    timestamp: "4d",
    content: "",
    imageUrl: "https://i.pinimg.com/736x/88/61/08/88610828b6ed19d91c00b4957d782cd3.jpg",
    likes: 670,
    comments: 7,
  },
  {
    id: 8,
    author: "David Kim",
    username: "davidkim",
    verified: false,
    timestamp: "2w",
    content: "Never give up on your dreams.",
    imageUrl: "https://i.pinimg.com/1200x/da/db/8d/dadb8db5595cbc035582b6d2ae7032a9.jpg",
    likes: 890,
    comments: 15,
  },
  {
    id: 9,
    author: "Lily Evans",
    username: "lilyevans",
    verified: true,
    timestamp: "1d",
    content: "",
    imageUrl: "https://i.pinimg.com/736x/b1/f2/01/b1f2016a8efdff9f80847e5e98d6b9a1.jpg",
    likes: 1400,
    comments: 33,
  },
  {
    id: 10,
    author: "Mark Twain",
    username: "marktwain",
    verified: false,
    timestamp: "3w",
    content: "The secret of getting ahead is getting started.",
    imageUrl: "https://i.pinimg.com/1200x/c0/bd/2f/c0bd2f1c6d4ad797d1415450b7103ef6.jpg",
    likes: 1100,
    comments: 18,
  },
];

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${post.username}`}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100">
              {post.username}
              {post.verified && <FaCheckCircle className="text-blue-500 ml-1" />}
            </div>
            <span className="text-gray-500 text-sm">{post.timestamp}</span>
          </div>
        </div>
        <button className="text-blue-500 font-semibold text-sm">Follow</button>
      </div>

      {/* Post Content */}
      <div>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full object-cover max-h-[500px]"
          />
        )}
        {post.content && !post.imageUrl && (
          <div className="p-4 text-center text-gray-900 dark:text-gray-100 italic">
            {post.content}
          </div>
        )}
      </div>

      {/* Interaction Buttons with Counts */}
      <div className="flex justify-between items-center px-4 py-3 text-gray-500 dark:text-gray-400 text-lg">
        <div className="flex gap-6">
          {/* Likes */}
          <button className="flex items-center gap-1 hover:text-red-500 transition">
            <i className="ri-heart-line"></i>
            <span className="text-sm">{post.likes.toLocaleString()}</span>
          </button>

          {/* Comments */}
          <button className="flex items-center gap-1 hover:text-blue-500 transition">
            <i className="ri-chat-1-line"></i>
            <span className="text-sm">{post.comments}</span>
          </button>

          {/* Shares */}
          <button className="flex items-center gap-1 hover:text-green-500 transition">
            <i className="ri-send-plane-line"></i>
            <span className="text-sm">Share</span>
          </button>
        </div>

        {/* Bookmark */}
        <button className="hover:text-gray-700 dark:hover:text-gray-200 transition">
          <i className="ri-bookmark-line"></i>
        </button>
      </div>
    </div>
  );
};

const Home = ({ open }) => {
  return (
    <div
      className={`min-h-screen pt-20 pb-4 px-4 sm:px-6 md:px-10 transition-all duration-300 flex flex-col gap-6 items-center bg-gray-900`}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
