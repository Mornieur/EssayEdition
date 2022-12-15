import { EssayProofreader } from "../../components/EssayProofreader";
import { Layout } from "../../components/Layout";
import { TypeErrorsEssay } from "../../components/TypeErrorsEssay";
import * as S from '../../styles/correction-text'

export default function CorrectionText() {
  return (
    <Layout>
      <S.Container>
        <h2>Corrigir Redação</h2>
        <div className="two-columns">
          <EssayProofreader />
          <TypeErrorsEssay />
        </div>
      </S.Container>
    </Layout>
  );
}