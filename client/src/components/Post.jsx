import React from 'react';

const Post = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-900 text-lg font-semibold">Ansh Gupta</p>
            <p className="text-gray-600 text-sm">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-gray-800 text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          laborum vitae. Nemo illo voluptatem eligendi obcaecati consequatur
          suscipit quidem iure.
        </p>
        {
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="Post"
            className="rounded-lg w-full mb-4"
          />
        }
        <div className="flex justify-between items-center">
          <div className='flex flex-row gap-2'>
         

           
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
            </button>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              Comment
            </button>
           
          </div>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <h4 className="text-gray-900 font-bold mb-2">Comments</h4>
        <div className="mb-2">
          <p className="text-gray-800">
            <strong>ansh</strong>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam, sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
