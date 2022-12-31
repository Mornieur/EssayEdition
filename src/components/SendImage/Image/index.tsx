// Rendering individual images

const Image = ({ image }: any) => {
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component//

export const ImageGride = ({ images }: any) => {
  // render each image by calling Image component

  const renderImage = ({ image, index }: any) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };

  // Return the list of files//

  return <section className="file-list">{images.map(renderImage)}</section>;
};
