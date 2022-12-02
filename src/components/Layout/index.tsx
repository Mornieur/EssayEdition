import Link from "next/link"
import { FC, ReactNode } from "react"
import * as S from './styles'

interface IProps {
  children: ReactNode
}

export const Layout : FC<IProps> = ({children}) => {
  return (
    <>
      <S.Header>
        <h1>REDAÇÃO NOTA 1000</h1>
      </S.Header>
      <S.Children>
        {children}
      </S.Children>
      <S.Footer>
        <p>
          By: <Link href={'https://github.com/Mornieur'}>Mornieur</Link> &{' '}
          <Link href={'https://github.com/gabisanfilippo'}>gabisanfilippo</Link>
        </p>
      </S.Footer>
    </>
  );
}