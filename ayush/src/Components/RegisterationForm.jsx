import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessRegistration: null,
    businessAddressProof: null,
    panCard: null,
    gstRegistration: null,
    qualityCertifications: null,
    productDetails: null,
    complianceDocuments: null,
    professionalCredentials: null,
    businessPlan: null,
    financialStatements: null,
    lettersOfRecommendation: null,
    otherRegulatoryApprovals: null,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-green-700 py-12">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Medicine Startup Registration</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label htmlFor={key} className="block text-green-800 mb-2">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              </label>
              <input
                type={key.includes('AddressProof') || key.includes('Card') || key.includes('Certifications') || key.includes('Documents') || key.includes('Credentials') || key.includes('Plan') || key.includes('Statements') || key.includes('Approvals') ? 'file' : 'text'}
                id={key}
                name={key}
                onChange={handleChange}
                className="w-full p-2 bg-gray-100 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-6"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;