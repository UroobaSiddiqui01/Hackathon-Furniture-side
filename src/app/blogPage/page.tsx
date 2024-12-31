import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-100  py-6">
        <div className="container mx-auto px-40 py-8">
          <h1 className="text-2xl font-bold text-gray-800">Blog Page</h1>
          <nav>
            <a href="#" className="text-blue-500 hover:underline">Home</a> /
            <span className="text-gray-500 ml-1"> Blog</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <section className="md:col-span-2 space-y-6">
          {[1, 2, 3].map((post) => (
            <article key={post} className="bg-white rounded shadow overflow-hidden">
              <img
                src={`https://via.placeholder.com/870x453?text=Blog+Post+${post}`}
                alt={`Blog Post ${post}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Blog Post Title {post}</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisi nec ligula
                  posuere pharetra vel sit amet purus.
                </p>
                <a href="#" className="text-pink-500 hover:underline">Read More</a>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search blog..."
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Tech', 'Lifestyle', 'Travel', 'Food'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-600 hover:underline">{category}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
            {['Post One', 'Post Two', 'Post Three'].map((post) => (
              <div key={post} className="mb-4">
                <h4 className="text-gray-800 font-semibold">{post}</h4>
                <p className="text-gray-600 text-sm">December 26, 2024</p>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;

