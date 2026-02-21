// ======================================================
// MOCK POST DATA GENERATOR
// ======================================================

/*
Purpose:
Simulates backend API data for development and testing.

Why this exists:
• Allows UI development without server
• Provides consistent structure for components
• Easy to scale data volume
*/


// ======================================================
// HELPER FUNCTION: CREATE SINGLE POST OBJECT
// ======================================================

const createPost = (index) => {
  return {
    id: index + 1,

    username: `user${index + 1}`,

    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,

    image: `https://picsum.photos/600/600?random=${index + 1}`,

    caption: "Stay focused. Stay strong.",
  };
};

/*
Creates one post object.

Field details:
• id → Unique identifier for React rendering
• username → Simulated account name
• avatar → Random profile image
• image → Random post image
• caption → Post description text

(index % 70) prevents avatar API overflow
*/


// ======================================================
// GENERATE POSTS COLLECTION
// ======================================================

export const posts = Array.from({ length: 100 }, (_, index) =>
  createPost(index)
);

/*
Creates an array of 100 posts.

How it works:
• Array.from builds array of given size
• Each element generated using createPost()
• Exported for use in components

This simulates API response data.
*/