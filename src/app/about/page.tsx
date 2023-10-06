import Hero from "@/components/Hero";
import { Metadata } from "next";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export const metadata: Metadata = {
  title: "About Me",
  description: "차현우 커리어 소개",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shdow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          공부가 취미인 프론트엔드 개발자 <br />
          생생하고 역동적인 웹앱을 선호합니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          (주) 티윈 (2023.02 - 현재) <br />
          (주) 래프트앤컴퍼니 (2021.11 - 2022.11) <br />
          (주) 오메타 (2019.11 - 2021.10)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React.js, Vue.js, TypeScript, Next.js <br />
          React Native, Flutter <br />
          Git, Jira, Figma, Zeplin
          <br />
          VS Code, WebStorm, MongoDB, Firebase
        </p>
      </section>
    </>
  );
}
