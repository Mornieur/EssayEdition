import * as S from './styles'

export const CorrectedWording = () => {
  return (
    <S.Container>
      <h2>Redação Corrigida</h2>
      {localStorage.getItem('essay-corrected') ? (
        <div
          dangerouslySetInnerHTML={{ __html: localStorage.getItem('essay-sent')! }}
          className={'post'}
        ></div>
      ) : (
          <div>
            Ops! Parece que sua redação ainda não foi corrigida :/
          </div>
      )}
    </S.Container>
  );
}