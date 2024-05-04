import React, { useState } from 'react';

const ProfilePage = () => {
  const [bio, setBio] = useState(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente fugit delectus quae veniam culpa, quia libero assumenda quas error?");
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState();
  const [showActivity, setShowActivity] = useState(false);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSaveBio = () => {
    // Code to save updated bio to the backend
    setIsEditingBio(false);
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="flex">
     
      {/* Sidebar */}
      <div className="bg-gray-200 w-64 p-4 flex-shrink-0">
        <div className="flex items-center mb-4">
          <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">ansh gupta</h2>
            <p className="text-sm text-gray-600">@ansh1165</p>
          </div>
        </div>
        <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum rerum voluptates nulla soluta, velit quas saepe quidem nihil veritatis delectus!</p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mr-2">
            Follow
          </button>
          <button className="text-gray-700 font-semibold py-2 px-4 rounded-md">
            Message
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Cover Photo */}
        <div className="relative mb-6">
          <img src={coverPhoto} alt="Cover" className="w-full h-64 object-cover rounded-lg" />
          <label htmlFor="cover-photo" className="absolute bottom-0 right-0 mr-4 mb-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 2.2 0 4-1.8 4-4 0-2.2-1.8-4-4-4zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-2.2 0-4-1.8-4-4 0-.3.1-.6.2-.9L2 10.6c-.1.2-.2.4-.2.6 0 2.2 1.8 4 4 4 .3 0 .5 0 .8-.1l2.3 2.3c-.3.1-.6.2-.9.2zm4.3-1.3l-2.3-2.3c.3-.1.6-.2.9-.2 2.2 0 4-1.8 4-4 0-.3 0-.5-.1-.8l2.3-2.3c.1.3.2.6.2.9 0 2.2-1.8 4-4 4-.3 0-.5 0-.8.1zM10 0C6.1 0 3 3.1 3 7c0 .3 0 .5.1.8L.8 12.3c-.1-.3-.2-.6-.2-.9 0-2.2 1.8-4 4-4 .3 0 .5 0 .8-.1l2.3-2.3C9.5 3.1 9.7 3 10 3c2.2 0 4 1.8 4 4 0 .3 0 .5-.1.8l2.3 2.3c.1-.3.2-.6.2-.9 0-3.9-3.1-7-7-7z"/>
            </svg>
            <input
              id="cover-photo"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleCoverPhotoChange}
            />
          </label>
        </div>
        {/* Header Section */}
        <div className="px-4 py-6 border-b border-gray-200">
          <div className="flex items-center">
            <img src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' alt="Profile" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">ansh gupta</h2>
              <p className="text-gray-600">@ansh1165</p>
              <p className="text-gray-600">Joined {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="mt-4">
            {isEditingBio ? (
              <div>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 mb-2"
                  value={bio}
                  onChange={handleBioChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mr-2"
                  onClick={handleSaveBio}
                >
                  Save
                </button>
                <button
                  className="text-gray-500 hover:text-gray-600 font-semibold px-4 py-2 rounded-md"
                  onClick={() => setIsEditingBio(false)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-700">{bio}</p>
                <button
                  className="text-blue-500 hover:text-blue-600 font-semibold mt-2"
                  onClick={() => setIsEditingBio(true)}
                >
                  Edit Bio
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Body Section */}
        <div className="px-4 py-6">
          {/* Tabs Section */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`mr-6 pb-2 text-lg font-semibold border-b-2 focus:outline-none ${
                !showActivity ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'
              }`}
              onClick={() => setShowActivity(false)}
            >
              Profile
            </button>
            <button
              className={`mr-6 pb-2 text-lg font-semibold border-b-2 focus:outline-none ${
                showActivity ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'
              }`}
              onClick={() => setShowActivity(true)}
            >
              Activity
            </button>
          </div>
          {/* Content Section */}
          <div>
            {showActivity ? (
              <div className="animate-pulse">
                {/* Placeholder for Recent Activity */}
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
              </div>
            ) : (
              <div>
                {/* Placeholder for Profile Statistics */}
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
