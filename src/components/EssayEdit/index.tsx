import * as S from './styles';
import DrawRectangle from './components/DrawRectangle';
import DrawingCanvas from './components/DrawingCanvas';

export const EssayEdit = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>Edição de redação</h1>
      </S.Title>

      {/* <DrawRectangle></DrawRectangle> */}
      <DrawingCanvas></DrawingCanvas>
      <S.SubmitImage></S.SubmitImage>
    </S.Container>
  );
};
