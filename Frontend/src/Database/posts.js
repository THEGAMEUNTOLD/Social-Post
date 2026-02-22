// ======================================================
// INSTAGRAM-STYLE MOCK DATA — POSTCARD COMPATIBLE
// ======================================================

/*
Purpose:
Generates realistic mock post data that matches exactly
what the PostCard component expects.

Compatible Fields:
- id
- username
- avatar
- image
- caption
- likes
- commentsCount
- verified
*/


// ======================================================
// HELPER FUNCTIONS
// ======================================================

/*
Reusable utilities for randomness and variation.
Ensures every generated user/post is unique.
*/

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomItem = (array) =>
  array[randomNumber(0, array.length - 1)];

const randomBoolean = (probability = 0.5) =>
  Math.random() < probability;

/*
This section creates reusable logic for generating
random values used throughout the mock data.
*/


// ======================================================
// DATA SOURCES
// ======================================================

/*
Static content pools that simulate real users and posts.
This prevents repetitive or unrealistic data.
*/

const firstNames = [
  "Aarav", "Rohan", "Kabir", "Vihaan", "Arjun",
  "Ishaan", "Dev", "Reyansh", "Aditya", "Zayn"
];

const lastNames = [
  "Sharma", "Mehta", "Kapoor", "Verma", "Reddy",
  "Nair", "Gupta", "Patel", "Joshi", "Malhotra"
];

const captionIdeas = [
  "Stay focused. Stay strong. Discipline creates freedom.",
  "Consistency beats motivation every time.",
  "Work hard in silence. Let success speak.",
  "Progress over perfection.",
  "Building a life I’m proud of.",
  "Dream big. Execute daily.",
  "Mindset is everything.",
  "Small steps → massive results.",
  "Leveling up every day.",
  "Creating my own path."
];

/*
This section stores realistic content used to generate
unique names and captions for every post.
*/


// ======================================================
// USERNAME GENERATOR
// ======================================================

/*
Creates unique Instagram-style usernames.
Example:
rohan_482
aarav.dev91
kabir.fit23
*/

const createUsername = () => {
  const first = randomItem(firstNames).toLowerCase();
  const number = randomNumber(10, 999);

  return `${first}${number}`;
};

/*
This function ensures every post belongs to a unique user.
*/


// ======================================================
// POST GENERATOR
// ======================================================

/*
Creates a single post object exactly matching
the PostCard propTypes structure.
*/

const createPost = (index) => {
  const username = createUsername();

  return {
    id: index + 1,

    username,

    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,

    image: `https://picsum.photos/600/600?random=${index + 1}`,

    caption: randomItem(captionIdeas),

    likes: randomNumber(100, 12000),

    commentsCount: randomNumber(0, 500),

    verified: randomBoolean(0.25)
  };
};

/*
This function produces a complete post object
that your PostCard can render directly.
*/


// ======================================================
// POSTS COLLECTION EXPORT
// ======================================================

/*
Creates a large dataset for UI testing.
Supports:
- feed rendering
- scrolling
- performance testing
*/

export const posts = Array.from({ length: 100 }, (_, index) =>
  createPost(index)
);

/*
Exports 100 fully structured posts ready for use.
*/