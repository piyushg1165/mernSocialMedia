import React, { useState } from 'react';
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  
 const handleSubmit = () => {
  console.log("submit");
  axios.post('http://localhost:3000/users/register', 
  {
    name,
    email,
    gender,
    bio,
    profilePic,
    location,
    password
  }
  )
  .then(function (response) {
    console.log(response);
    setName("");
    setPassword("");
    setEmail("");
    setGender("");
    setLocation("");
    setBio("");
    setProfilePic("");
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
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
     
      <input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
      
      <input value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)}  placeholder="Tell us about Yourself" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"/>
      <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)}  placeholder="Profile Picture URL" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="url"/>
      <input value={location} onChange={(e) => setLocation(e.target.value)}  placeholder="Location" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>

      
      
      <label className="text-sm mb-2 text-gray-900 cursor-pointer" htmlFor="gender">
        Gender
      </label>
      <select onChange={(e) => setGender(e.target.value)}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <p className="text-gray-900 mt-4"> Already have an account? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Login</a></p>
      <button onClick={handleSubmit} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type='button'>Sign Up</button>
    </form>
  </div>
</div>

    </>
  )
}

export default SignUp;