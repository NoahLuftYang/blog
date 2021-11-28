import { Layout } from '@app/components/Layout';
import { SEO } from '@app/components/SEO';

export const MePage = () => {
  return (
    <Layout>
      <SEO title="안녕하세요 👋" />
      <section>
        <p>
          <span aria-label="raising_hand" role="img">
            🙋
          </span>
          안녕하세요 저는 양의현입니다!
        </p>
        <p>프론트엔드 엔지니어</p>
      </section>
    </Layout>
  );
};
