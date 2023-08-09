import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return (
    <div className='flex flex-wrap m-2 gap-4 items-center justify-center'>
      {renderedImages}
    </div>
  );
}
export default ImageList;
