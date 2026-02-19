import React, { useMemo } from 'react'

const Explore = () => {
  const posts = useMemo(() => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/600/600?random=${Date.now()}-${i}`,
    likes: Math.floor(Math.random() * 5000),
    comments: Math.floor(Math.random() * 500),
    featured: Math.random() > 0.8,
  }));
}, []);

  return (
    <div className='px-3 md:px-6 py-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-3 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px]'>
        {posts.map((post) => (
          <div className={`relative group overflow-hidden rouned-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 ${post.featured ? "md:col-span-2 md:row-span-2" : ""}`}>
            
            {/* Image */}
            <img 
            src={post.image} 
            alt="Explore post"
            loading='lazy'
            className='w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110'/>

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300'/>

             {/* Stats */}
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-6 text-white font-semibold text-l opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="flex items-center gap-1">❤️ {post.likes}</span>
              <span className="flex items-center gap-1">💬 {post.Comments}</span>
            </div>

            {/* Soft glass border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Explore
