import React, { useState } from 'react';
import axios from 'axios';


const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const response = await axios.post('http://localhost:5000/generate-image', { prompt });
      setImage(response.data.image); 
    } catch (err) {
      setError('Error generating image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen  p-4" style={{ backgroundColor: '#A2EBC0' }}>
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-8">Image Generator</h1>
        
       
        <div className="mb-6">
          <input
            type="text"
            value={prompt}
            onChange={handleChange}
            placeholder="Enter a prompt for the image"
            className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={generateImage}
            className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition ${
              loading || !prompt ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
            disabled={loading || !prompt}
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </button>
        </div>

      
        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
        )}

      
        {image && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center mb-4">Generated Image</h3>
            <div className="flex justify-center">
              <img
                src={`data:image/png;base64,${image}`}
                alt="Generated"
                className="max-w-full max-h-[400px] rounded-lg shadow-md"
              />
            </div>
          </div>
        )}
      </div>
     
    </div>
     
     </>
  );
};

export default ImageGenerator;
