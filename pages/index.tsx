import type { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
