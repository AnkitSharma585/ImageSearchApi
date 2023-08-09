function ImageShow({ image }) {
  return (
    <img className='w-56' src={image.urls.small} alt={image.alt_description} />
  );
}
export default ImageShow;
