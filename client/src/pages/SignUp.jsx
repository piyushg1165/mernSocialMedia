import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState("Shivam");
  const [email, setEmail] = useState("shivam@gmail.com");
  const [gender, setGender] = useState("male");
  const [bio, setBio] = useState("This is bio");
  const [profilePic, setProfilePic] = useState("https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250");
  const [location, setLocation] = useState("india");
  const [password, setPassword] = useState("shivam");
  const data = {
    name,
    email,
    gender,
    bio,
    profilePic,
    location,
    password
  }
 const handleSubmit = () => {
  axios.post('/http://localhost:3000/users/register', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }
  return (
    <>
   <div className="flex flex-col items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
    <form className="flex flex-col">
      <input placeholder="Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
     
      <input placeholder="Email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
      
      <input placeholder="Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>
      <textarea placeholder="Tell us about Yourself" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"/>
      <input placeholder="Profile Picture URL" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="url"/>
      <input placeholder="Location" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>

      
      
      <label className="text-sm mb-2 text-gray-900 cursor-pointer" htmlFor="gender">
        Gender
      </label>
      <select className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <p className="text-gray-900 mt-4"> Already have an account? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Login</a></p>
      <button onClick={() => handleSubmit} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Sign Up</button>
    </form>
  </div>
</div>

    </>
  )
}

export default SignUp;