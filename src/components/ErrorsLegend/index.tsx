import { CardErrorEssay } from '../CardErrorEssay';
import * as S from './styles';

export const ErrorsLegend = () => {
  return (
    <S.Container>
      <CardErrorEssay
        bgColorSpan="var(--blue-300)"
        colorSpan="var(--white)"
        spanName="E1"
        text="Fuga do tema"
      />
      <CardErrorEssay
        bgColorSpan="var(--yellow-600)"
        colorSpan="var(--black)"
        spanName="E2"
        text="Falta de coesão textual"
      />
      <CardErrorEssay
        bgColorSpan="var(--blue-dark)"
        colorSpan="var(--white)"
        spanName="E3"
        text="Incoerência"
      />
      <CardErrorEssay
        bgColorSpan="var(--blueTwo-light)"
        colorSpan="var(--black)"
        spanName="E4"
        text="Erro de português"
      />
      <CardErrorEssay
        bgColorSpan="var(--pink-300)"
        colorSpan="var(--white)"
        spanName="E5"
        text="Períodos muito longos"
      />
      <CardErrorEssay
        bgColorSpan="var(--green-500)"
        colorSpan="var(--white)"
        spanName="E6"
        text="Linguagem informal"
      />
      <CardErrorEssay
        bgColorSpan="var(--red-700)"
        colorSpan="var(--white)"
        spanName="E7"
        text="Frases ambíguas"
      />
      <CardErrorEssay
        bgColorSpan="var(--grey-500)"
        colorSpan="var(--white)"
        spanName="E8"
        text="Erro de tipologia textual"
      />
      <CardErrorEssay
        bgColorSpan="var(--green-900)"
        colorSpan="var(--white)"
        spanName="E9"
        text="Sem defesa do ponto de vista"
      />
      <CardErrorEssay
        bgColorSpan="var(--green-100)"
        colorSpan="var(--white)"
        spanName="E10"
        text="Escrita em primeira pessoa"
      />
      <CardErrorEssay
        bgColorSpan="var(--orange-500)"
        colorSpan="var(--white)"
        spanName="E11"
        text="Sem conclusão"
      />
      <CardErrorEssay
        bgColorSpan="var(--purple-600)"
        colorSpan="var(--white)"
        spanName="E12"
        text="Ausência de fatos e dados"
      />
    </S.Container>
  );
};
