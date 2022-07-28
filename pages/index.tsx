import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ChartContent, Layout, Navigator } from "components";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getCrabSales } from "services/crabSales-service";

const fullFetch = {
  from: "2022-07-01T00:00:00.000000Z",
  breedCount: [0, 3],
  legend: [0, 6],
  purity: [0, 6],
  crabClass: [
    "SURGE",
    "SUNKEN",
    "PRIME",
    "BULK",
    "CRABOID",
    "RUINED",
    "GEM",
    "ORGANIC",
  ],
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["crab-sales", fullFetch], () =>
    getCrabSales(fullFetch)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPage = () => {
  return (
    <div className="py-0 sm:px-8 bg-almost-black">
      <Layout>
        <Navigator />
        {/* <div className="hidden sm:flex">Crabada</div> */}
        <ChartContent />
      </Layout>
      <footer className="flex flex-col justify-center items-center py-6 px-6">
        <div className="flex">
          <h1 className="font-bold text-xl text-white mr-2">P2E Analytics</h1>
          <h2 className="font-normal text-lg inline-flex">| Your GameFi Hub</h2>
        </div>
        <h1 className="font-normal text-xl flex items-end underline text-blue-700">
          This is not financial advice
        </h1>
      </footer>
    </div>
  );
};

export default Home;
