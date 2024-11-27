import { Link } from 'react-router-dom';
import blog from './blog.js';  // Assuming blog.js contains the blog data

const HealthBlog = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blog.map((post) => (
        <div
          key={post.id}
          className="block bg-white shadow-md rounded-lg overflow-hidden flex flex-col" // Removed cursor-pointer here
        >
          <img src={post.image} alt={post.header} className="w-full h-48 object-cover" />
          <div className="p-4 flex-1">
            <h2 className="text-lg font-bold text-gray-800">{post.header}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.description.substring(0, 100)}...</p>
          </div>

          {/* Know More Button */}
          <Link
            to={post.linkRoute}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 mb-4 self-center cursor-pointer" // Apply cursor-pointer only to the button
          >
            Know More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HealthBlog;
