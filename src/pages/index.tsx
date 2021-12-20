import type { NextPage } from "next";
import Layout from "ui/components/Layout/Layout";
import { Home } from "ui/components/Home";
import { Operations } from "ui/components/Operations";

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
      <Operations />
    </Layout>
  );
};

export default Index;
