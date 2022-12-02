import { TextDraft } from '../TextDraft'
import * as S from './styles'
import { useState } from 'react'
import { Button } from '../../global/UI/Button';
import { toast } from 'react-toastify';

export const SendText = () => {
  const [dataToPost, setDataToPost] = useState({content: ''});
  return (
    <S.Container>
      <h2>Digite sua Redação</h2>
      <TextDraft
        setDataToPost={setDataToPost}
        dataToPost={dataToPost}
        mode={'post'}
      />
      <div className="button-container">
        <Button bgColor={'var(--yellow-600)'} onClick={() => {
          localStorage.setItem('essay-sent', dataToPost.content);
          toast.success('Redação enviada');
        }}>
          Enviar
        </Button>
      </div>
    </S.Container>
  );
}