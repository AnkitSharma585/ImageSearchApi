import { useState } from 'react';
import SearchImages from './api';
import ImageSearch from './Components/ImageSearch';
import ImageList from './Components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  const onSearch = async (term) => {
    setImages(await SearchImages(term));
  };

  return (
    <div className='container mx-auto my-4'>
      <ImageSearch onSearch={onSearch} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
