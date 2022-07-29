import { dehydrate, QueryClient } from "@tanstack/react-query";
import {
  ChartContent,
  Filters,
  Footer,
  HomeHeader,
  Layout,
  Navigator,
} from "components";
import type { GetServerSideProps, NextPage } from "next";
import { getCrabSales } from "services/crabSales-service";
import { prefetchReqs } from "utils/constants";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.fullFetch], () =>
    getCrabSales(prefetchReqs.fullFetch)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.yesterday], () =>
    getCrabSales(prefetchReqs.yesterday)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.SURGE], () =>
    getCrabSales(prefetchReqs.SURGE)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.SUNKEN], () =>
    getCrabSales(prefetchReqs.SUNKEN)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.BULK], () =>
    getCrabSales(prefetchReqs.BULK)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.CRABOID], () =>
    getCrabSales(prefetchReqs.CRABOID)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.GEM], () =>
    getCrabSales(prefetchReqs.GEM)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.ORGANIC], () =>
    getCrabSales(prefetchReqs.ORGANIC)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.PRIME], () =>
    getCrabSales(prefetchReqs.PRIME)
  );

  await queryClient.prefetchQuery(["crab-sales", prefetchReqs.RUINED], () =>
    getCrabSales(prefetchReqs.RUINED)
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
