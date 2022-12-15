import { useState } from 'react';
import { Button } from '../../global/UI/Button';
import { TextDraft } from '../TextDraft';
import * as S from './styles'
import { toast } from 'react-toastify';

export const EssayProofreader = () => {
  const [dataToPost, setDataToPost] = useState<any>();
  return (
    <S.Container>
      <S.GradesContainer>
        <S.InputContainer>
          <label>Competência 1: </label>
          <input type={'number'} max={1000} min={0} />
        </S.InputContainer>
        <S.InputContainer>
          <label>Competência 2: </label>
          <input type={'number'} max={1000} min={0} />
        </S.InputContainer>
        <S.InputContainer>
          <label>Competência 3: </label>
          <input type={'number'} max={1000} min={0} />
        </S.InputContainer>
        <S.InputContainer>
          <label>Competência 4: </label>
          <input type={'number'} max={1000} min={0} />
        </S.InputContainer>
        <S.InputContainer>
          <label>Competência 5: </label>
          <input type={'number'} max={1000} min={0} />
        </S.InputContainer>
      </S.GradesContainer>
      <TextDraft
        dataToPost={dataToPost}
        mode={'put'}
        setDataToPost={setDataToPost}
        post={localStorage.getItem('essay-sent')}
      />
      <div className="button-container">
        <Button
          bgColor={'var(--yellow-600)'}
          onClick={() => {
            localStorage.setItem('essay-corrected', dataToPost.content);
            toast.success('Redação enviada');
          }}
        >
          Enviar
        </Button>
      </div>
    </S.Container>
  );
}