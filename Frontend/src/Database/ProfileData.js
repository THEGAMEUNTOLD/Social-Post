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
      image: "https://i.pinimg.com/1200x/b9/82/41/b9824142d3db284b59756c5893cebf54.jpg",
    },
    {
      id: 2,
      title: "Food",
      image: "https://i.pinimg.com/1200x/4e/f5/90/4ef59024c47711f5fb14cd5b012fe3c9.jpg",
    },
    {
      id: 3,
      title: "Work",
      image: "https://i.pinimg.com/736x/c1/a9/43/c1a943dcd3571ab02d4c8dadf230c843.jpg",
    },
  ],
};



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