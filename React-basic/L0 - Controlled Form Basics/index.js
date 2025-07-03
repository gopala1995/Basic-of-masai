import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

   const handleSubmit = (event) => {
    event.preventDefault(); 

    if (username.trim() === '') {
      setErrorMessage('Username cannot be empty!');
      setSubmittedUsername('');
    } else {
     
      setErrorMessage('');
      setSubmittedUsername(username);
      
      alert(`Submitted Username: ${username}`);
      setUsername(''); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 font-inter">
          Username Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2 text-left">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username} 
              onChange={handleInputChange} 
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your username"
              aria-describedby="username-error" 
            />
            {errorMessage && (
              <p id="username-error" className="mt-2 text-sm text-red-600 text-left">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>

        {submittedUsername && (
          <p className="mt-8 text-xl text-green-700 font-medium">
            Successfully submitted: <span className="font-bold">{submittedUsername}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;