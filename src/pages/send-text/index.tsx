import { Layout } from "../../components/Layout";
import * as S from '../../styles/send-text'
import { SendText as SendTextComponent } from '../../components/SendText'

export default function SendText() {
  return (
    <Layout>
      <S.Container>
        <SendTextComponent />
        <p className="flex">oi</p>
      </S.Container>
    </Layout>
  );
}