import type { NextPage } from "next";
import { Container, Button } from "@mui/material";

import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => (
  <Container>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Button variant="contained">hello world</Button>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  </Container>
);

export default IndexPage;
