import { dehydrate, QueryClient } from "@tanstack/react-query";
import {
  ChartContent,
  Filters,
  Footer,
  HomeHeader,
  Layout,
  Navigator,
} from "components";
import Icons from "icons";
import Images from "images";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
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
        <HomeHeader />
        <Filters />
        <ChartContent />
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
