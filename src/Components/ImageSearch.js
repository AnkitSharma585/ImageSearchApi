import { useState } from 'react';

function ImageSearch({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm('');
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <h1 className='font-bold text-2xl mb-5'>Search Free HQ Images</h1>
        <input
          className='m-2 p-1.5 border border-gray-500 bg-gray-50 rounded'
          placeholder='Powered by unsplash api'
          value={term}
          onChange={handleChange}
        />
        <button className='px-3 py-1.5 text-white bg-blue-600 rounded'>
          Go!!!
        </button>
      </form>
    </div>
  );
}
export default ImageSearch;
