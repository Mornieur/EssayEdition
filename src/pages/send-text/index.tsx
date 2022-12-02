import { Layout } from "../../components/Layout";
import * as S from '../../styles/send-text'
import { SendText as SendTextComponent } from '../../components/SendText'
import { CorrectedWording } from "../../components/CorrectedWording";

export default function SendText() {
  return (
    <Layout>
      <S.Container>
        <SendTextComponent />
        <CorrectedWording />
      </S.Container>
    </Layout>
  );
}