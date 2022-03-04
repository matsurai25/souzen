import * as React from 'react'
import Layout from '../../components/Layout'
import ResponsiveWrapper from '../../components/ResponsiveWrapper'
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <ResponsiveWrapper>
      <H1>ご依頼について</H1>
      {/* <Section>
        <Schedule>
          <li>
            <span>2022.03~</span>
            スケジュール余裕あります。ご相談いただけますと幸いです。
          </li>
        </Schedule>
      </Section> */}
      <Section>
        <H2>連絡方法について</H2>
        <p>
          以下のフォーム、またはTwitterのDMまでお送り下さい。
          <br />
          24時間以内に、お受けできるかに関わらず折返しご連絡差し上げます。
          <br />
          <Small>
            24時間以内に返信がなかった場合、正しく受け取れていない又は何かの理由で受け取ることができない状態になっている可能性があります。
            <br />
            お手数おかけしますが、もう一度ご連絡いただくか、別の手段でご連絡いただければと思います。
          </Small>
        </p>
      </Section>
      <Section>
        <H2>打ち合わせについて</H2>
        <p>
          Discord / Slack / Google Meet /
          Zoom等でのビデオ通話が可能です。
          <br />
          都内等であれば直接伺わせていただくことも可能です。
        </p>
      </Section>
      <Section>
        <H2>案件の内容について</H2>
        <p>
          秘密保持契約を結んでいない状態でも、以下の情報についてはご提示をお願いしております。
          <br />
          特に予算と実績公開については必ずお願い致します。
        </p>
        <Ul>
          <li>報酬の予算感</li>
          <li>スケジュール（作業時期・公開時期）</li>
          <li>実績公開可否（基本的に実績公開できないものはお断りしています）</li>
          <li>大本のクライアントの社名(あれば)</li>
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

const Small = styled.span`
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

const Schedule = styled.ul`
  display: block;
  padding: 16px;
  background-color: #eee;
  border-radius: 4px;
  margin: 20px 0;

  li {
    display: grid;
    gap: 12px;
    grid-template-columns: auto 1fr;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: block;
      background: #dddddd;
    }
  }
`
