import Head from "next/head";
import Seo from "../components/Seo";

export default function About() {
  return (
    <main>
      <Seo title="About" />
      <h1>About</h1>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </main>
  );
}
