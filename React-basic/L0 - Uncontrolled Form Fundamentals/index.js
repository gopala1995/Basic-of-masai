import React, { useRef } from 'react';

function App() {
  const usernameInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;

   
    alert(`Submitted Username: ${enteredUsername}`);

    usernameInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 font-inter">
          Username Form (Uncontrolled)
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
              ref={usernameInputRef} // Attach the ref to the input element
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 border-gray-300"
              placeholder="Enter your username"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;