// ======================================================
// MOCK STORY DATA GENERATOR
// ======================================================

/*
Purpose:
Provides mock story data for UI development.

Why this exists:
• Allows frontend development without backend
• Mimics real API response structure
• Easily scalable data generation
*/


// ======================================================
// HELPER FUNCTION: CREATE SINGLE STORY
// ======================================================

const createStory = (index) => {
  return {
    id: index + 1,

    username: `user${index + 1}`,

    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 10}`,
  };
};

/*
Creates one story object.

Field description:
• id → Unique identifier for React rendering
• username → Simulated account name
• avatar → Random profile image URL

(index % 70) prevents avatar API overflow
*/


// ======================================================
// GENERATE STORIES COLLECTION
// ======================================================

export const stories = Array.from({ length: 12 }, (_, index) =>
  createStory(index)
);

/*
Creates array of 12 story objects.

How it works:
• Array.from generates fixed-length array
• Each item created by helper function
• Exported for use in StoryBar or Feed

This simulates data returned from backend API.
*/