import * as S from './styles';
import { useEffect, useRef, useState } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef(null) as any;
  const contextRef = useRef(null) as any;

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }: any) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }: any) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = 'source-over';
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = 'destination-out';
  };

  const saveImageToLocal = (event: any) => {
    let link = event.currentTarget;
    link.setAttribute('download', 'canvas.png');
    let image = canvasRef.current.toDataURL('image/png');
    link.setAttribute('href', image);
  };

  return (
    <S.Container>
      <canvas
        className="canvas-container"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      <S.Buttons>
        <div>
          <button className="draw" onClick={setToDraw}>
            Marcar
          </button>
          <button className="erase" onClick={setToErase}>
            Apagar
          </button>
        </div>

        <a
          id="download_image_link"
          href="download_link"
          onClick={saveImageToLocal}
        >
          Download Image
        </a>
      </S.Buttons>
    </S.Container>
  );
};

export default DrawingCanvas;
