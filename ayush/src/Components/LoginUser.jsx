import { useState } from 'react';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    ayushId: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-green-700">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ayushId" className="block text-green-800 mb-2">Ayush ID:</label>
            <input
              type="text"
              id="ayushId"
              name="ayushId"
              value={formData.ayushId}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-900 text-white border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="dob" className="block text-green-800 mb-2">Date of Birth (DD/MM/YYYY):</label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              required
              className="w-full p-2 bg-gray-900 text-white border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;