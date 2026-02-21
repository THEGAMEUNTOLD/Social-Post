// ======================================================
// MOCK DATABASE - User & Post Data
// ======================================================

// User profile info
export const user = {
  username: "bharat_sharma",
  fullName: "Bharat Sharma",
  bio: "Front-end Developer | React & Tailwind Enthusiast\nSharing my journey here!",
  posts: 24,
  followers: 1020,
  following: 180,
  highlights: [
    {
      id: 1,
      title: "Travel",
      image: "https://source.unsplash.com/100x100/?travel",
    },
    {
      id: 2,
      title: "Food",
      image: "https://source.unsplash.com/100x100/?food",
    },
    {
      id: 3,
      title: "Work",
      image: "https://source.unsplash.com/100x100/?office",
    },
  ],
};

// Posts data
export const postsData = [
  { id: 1, image: "https://source.unsplash.com/300x300/?nature" },
  { id: 2, image: "https://source.unsplash.com/300x300/?city" },
  { id: 3, image: "https://source.unsplash.com/300x300/?tech" },
];

// Saved posts data
export const savedData = [
  { id: 1, image: "https://source.unsplash.com/300x300/?art" },
  { id: 2, image: "https://source.unsplash.com/300x300/?design" },
];

// Reels data (videos)
export const reelsData = [
  { id: 1, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, video: "https://www.w3schools.com/html/movie.mp4" },
];

// Tagged posts
export const taggedData = [
  { id: 1, image: "https://source.unsplash.com/300x300/?people" },
  { id: 2, image: "https://source.unsplash.com/300x300/?friends" },
];