// ==============================
// IMPORTS
// ==============================

import React, { useMemo } from "react";

// React → UI library
// useMemo → Prevents re-generating posts on every render


// ==============================
// EXPLORE COMPONENT
// ==============================

function Explore() {

  // ==============================
  // MOCK POSTS DATA
  // ==============================

  const posts = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      image: `https://picsum.photos/600/600?random=${index}`,
      likes: Math.floor(Math.random() * 5000),
      comments: Math.floor(Math.random() * 500),
      featured: Math.random() > 0.8,
    }));
  }, []);

  // Generates static mock content once
  // featured → Makes some items larger in grid
  // useMemo → Performance optimization


  return (
    <section className="px-3 md:px-6 py-4 max-w-7xl mx-auto">

      {/* ==============================
          POSTS GRID
      ============================== */}

      <div className="
        grid grid-cols-3
        auto-rows-[180px] md:auto-rows-[220px]
        gap-2
      ">
        {posts.map((post) => (
          <article
            key={post.id}
            tabIndex={0}
            className={`
              relative group overflow-hidden rounded-2xl cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-white/70
              ${post.featured ? "md:col-span-2 md:row-span-2" : ""}
            `}
          >

            {/* ==============================
                IMAGE
            ============================== */}

            <img
              src={post.image}
              alt={`Post ${post.id}`}
              loading="lazy"
              className="
                w-full h-full object-cover
                transition duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Displays post image
               Lazy loading improves performance
               Hover zoom effect */}


            {/* ==============================
                HOVER OVERLAY
            ============================== */}

            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/70 via-black/30 to-transparent
              opacity-0 group-hover:opacity-100
              transition duration-300
            " />

            {/* Dark gradient overlay on hover */}


            {/* ==============================
                POST STATS
            ============================== */}

            <div className="
              absolute inset-0 z-10
              flex items-center justify-center gap-6
              text-white font-semibold text-lg
              opacity-0 group-hover:opacity-100
              transition duration-300
            ">
              <span className="flex items-center gap-1">
                ❤️ {post.likes}
              </span>

              <span className="flex items-center gap-1">
                💬 {post.comments}
              </span>
            </div>

            {/* Shows engagement info on hover */}


            {/* ==============================
                BORDER EFFECT
            ============================== */}

            <div className="
              absolute inset-0 rounded-2xl
              ring-1 ring-white/10
              pointer-events-none
            " />

            {/* Soft glass-style border */}

          </article>
        ))}
      </div>

      {/* Responsive masonry-style layout */}

    </section>
  );
}


// ==============================
// EXPORT
// ==============================

export default Explore;

// Makes component usable in routes