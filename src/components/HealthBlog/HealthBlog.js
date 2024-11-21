import { Link } from 'react-router-dom';
import blog from './blog.js';

const HealthBlog = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blog.map((post) => (
        <Link
          to={`/blogpost/${post.slug}`} // Use the dynamic route
          key={post.id}
          className="block bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img src={post.image} alt={post.header} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{post.header}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.description.substring(0, 100)}...</p>
            <p className="text-xs text-gray-500 mt-2">Published on: {post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HealthBlog;
