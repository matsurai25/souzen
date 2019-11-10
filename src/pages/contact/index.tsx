import * as React from 'react'
import Layout from '../../components/Layout'
import ResponsiveWrapper from '../../components/ResponsiveWrapper'
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <ResponsiveWrapper>
      <H1>ご依頼について</H1>
      <Section>
        同人としての活動は好きなものへ積極的に参加していこうと考えています。
        <br />
        (最近参加できていないので特に)
        <br />
        <br />
        以下は主に副業として行うことを想定したものです。
        <br />
      </Section>
      <Section>
        <H2>連絡方法について</H2>
        <p>
          以下のフォーム、または以下の内容を満たすものをTwitterのDMまでお送りお下さい。
          <br />
          原則、翌日24時までにお受けできるかに関わらず連絡差し上げます。
          <Small>
            上記期間に返信がなかった場合、正しく受け取れていない又は何かの理由で受け取ることができない状態になっている可能性があります。
            もう一度ご連絡いただくか、別の手段でご連絡いただければと思います。
          </Small>
        </p>
      </Section>
      <Section>
        <H2>稼働時間について</H2>
        <p>
          会社員として勤務しているため、平日に定常的な時間拘束があるお仕事をお受けすることはできません。
        </p>
      </Section>
      <Section>
        <H2>打ち合わせについて</H2>
        <p>
          都内であれば直接伺います。遠方または簡単なコミュニケーションはSlack/Discordを利用し、チャットやボイスチャットなどで連絡いたします。
        </p>
      </Section>
      <Section>
        <H2>案件の内容について</H2>
        <p>
          NDA（秘密保持契約）を結んでいない状態でも、以下の情報についてはご提示をお願いします。
          <br />
          特に予算と実績公開については必ずお願い致します。
        </p>
        <Ul>
          <li>
            報酬の予算（見積りの参考にさせていだきます）
          </li>
          <li>スケジュール（作業時期・公開時期）</li>
          <li>実績公開について</li>
          <li>大本のクライアントの社名</li>
          <li>
            依頼作業内容
            <Small2>
              WEBサイト作成、MV作成など。細かい依頼内容の分類が分かる場合はそちらが望ましいです。
            </Small2>
          </li>
        </Ul>
      </Section>
      <Section>
        <ButtonWrapper>
          <Button
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSeEBAUQVUaErWUUiRpA1_Cv9Waz7mB3PV9HMg7cK8xLM6Hf4w/viewform'
          >
            フォームを開く(GoogleForm)
          </Button>
        </ButtonWrapper>
      </Section>
      <Small>
        この依頼フォームは
        <a
          href='https://twitter.com/you629/status/866965525196230656'
          target={'_blank'}
        >
          よー清水さんの公開しているフォーム
        </a>
        を参考にしております
      </Small>
    </ResponsiveWrapper>
  </Layout>
)

export default NotFoundPage

const H1 = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
`

const H2 = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Small = styled.div`
  font-size: 10px;
  line-height: 18px;
  margin: 16px auto;
  color: #999;
`

const Small2 = styled.div`
  font-size: 10px;
  line-height: 18px;
  color: #999;
`

const Section = styled.section`
  font-size: 14px;
  line-height: 24px;
  margin: 40px auto;
`

const Ul = styled.ul`
  padding-left: 20px;
  margin-top: 24px;

  li {
    list-style: disc;
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 100px;
  padding: 8px 24px;
  background: #000;
  color: #fff;
  text-decoration: none;
  transition: all 0.1s;

  &:hover {
    background: #333;
  }
`
