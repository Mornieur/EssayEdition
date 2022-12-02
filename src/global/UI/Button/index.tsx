import * as S from './styles'
import { ReactNode, FC } from 'react'

interface IProps {
  children: ReactNode;
  bgColor: string;
  border?: string;
  color?: string;
  onClick: () => void;
}

export const Button: FC<IProps> = ({ children, bgColor, border, color, onClick }) => {
  return (
    <S.Button bgColor={bgColor} border={border} color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};