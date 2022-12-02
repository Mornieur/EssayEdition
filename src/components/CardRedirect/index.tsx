import Link from "next/link"
import { FC, ReactNode } from "react";
import * as S from './styles'

interface IProps {
  backgroundCard: string;
  title: string;
  content: string;
  icon: ReactNode;
  link: string;
}

export const CardRedirect: FC<IProps> = ({
  backgroundCard,
  title,
  content,
  icon,
  link,
}) => {
  return (
    <Link href={link}>
      <S.Container backgroundCard={backgroundCard}>
        <div className="title">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <div className="icon">{icon}</div>
      </S.Container>
    </Link>
  );
};
