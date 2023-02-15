import { useState } from "react";

import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [greeting, setGreeting] = useState("こんにちは");
  const handleClick = () => {
    if (greeting === "こんにちは") {
      setGreeting("こんばんは");
    } else if (greeting === "こんばんは") {
      setGreeting("おはよう");
    } else {
      setGreeting("こんにちは");
    }
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello World and Next.js 👋</h1>
      <button onClick={handleClick}>8時間後</button>

      <p>{greeting}</p>

      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
