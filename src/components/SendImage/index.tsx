// import { useState } from 'react';
// import * as S from './styles';
// import Dropzone from './Upload';
// // import { UploadImages } from './Upload';

// export const SendImageComponent = () => {
//   return (
//     <S.Container>
//       <S.DrpzoneContainer>
//         <Dropzone />
//       </S.DrpzoneContainer>
//     </S.Container>
//   );
// };

import { useCallback, useState } from 'react';
import cuid from 'cuid';
import Dropzone from './Upload';
import { ImageGride } from './Image';

export const SendImageComponent = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback(({ acceptedFiles }: any) => {
    acceptedFiles.map(({ file }: any) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages(
          (prevState) =>
            [...prevState, { id: cuid(), src: e.target!.result }] as any,
        );
      };

      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag and Drop Test</h1>

      <Dropzone onDrop={onDrop} accept={'image/*'} />

      {/* <ImageGride images={images} /> */}
    </main>
  );
};
