import Link from 'next/link';
import { ErrorsLegend } from '../ErrorsLegend';
import * as S from './styles'

export const TypeErrorsEssay = () => {
  return (
    <S.Container>
      <h3>Legenda de Erros</h3>
      <p>
        O candidato deve seguir alguns critérios de acordo com as cinco
        competências cobradas pelo Inep na redação:
      </p>
      <ul>
        <li>Domínio da escrita formal da língua portuguesa</li>
        <li>Compreender o tema e não fugir do que é proposto</li>
        <li>
          Selecionar, relacionar, organizar e interpretar informações, fatos,
          opiniões e argumentos em defesa de um ponto de vista
        </li>
        <li>
          Conhecimento dos mecanismos linguísticos necessários para a construção
          da argumentação
        </li>
        <li>Respeito aos direitos humanos</li>
      </ul>
      <p>
        Para ver a tabela de pontos,{' '}
        <Link
          href={
            'http://portal.mec.gov.br/ultimas-noticias/418-enem-946573306/81381-conheca-as-cinco-competencias-cobradas-na-redacao-do-enem'
          }
        >
          clique aqui
        </Link>
      </p>
      <p>Marque no texto os erros de acordo com a legenda a seguir:</p>
      <ErrorsLegend />
    </S.Container>
  );
}