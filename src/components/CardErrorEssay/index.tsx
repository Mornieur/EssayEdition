import * as S from './styles'
import { FC } from 'react'

interface IProps {
  bgColorSpan: string;
  colorSpan: string;
  spanName: string;
  text: string;
}

export const CardErrorEssay: FC<IProps> = ({
  bgColorSpan,
  colorSpan,
  spanName,
  text,
}) => {
  return (
    <S.Container bgColorSpan={bgColorSpan} colorSpan={colorSpan}>
      <span>{spanName}</span>
      <p>{text}</p>
    </S.Container>
  );
};