import { dehydrate, QueryClient } from "@tanstack/react-query";
import { CrabChart, CrabRows, Dropdown, Header, Layout } from "components";
import useCrabs from "hooks/useCrabSales";
import Icons from "icons";
import Images from "images";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
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

  await queryClient.prefetchQuery(["posts", fullFetch], () =>
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
    <div className="py-0 sm:px-8">
      <Head>
        <title>Crabada</title>
        <meta name="description" content="Crabada analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <div className="flex flex-col flex-auto items-center w-11/12 pt-7 mb-6 bg-gradient-to-b from-chart-initial to-chart-end mx-3">
          <div className="flex mb-4">
            <h2 className="mr-1">Cabrada Count</h2>
            <h1 className="mr-1 text-hold-gray">{`(today's low)`}</h1>
            <Image
              src={Icons.circleInformation}
              alt="Circle information icon"
              className="fill-hold-gray"
            />
          </div>
          <div className="flex mb-6">
            <h2 className="mr-1">256,002</h2>
            <h1 className="mr-1 text-hold-gray">{`($1,543)`}</h1>
          </div>

          <CrabChart />

          <CrabRows />

          <div className="h-px w-full bg-separator mb-12" />
          <button className="bg-button py-2 px-4 mb-16 rounded-3xl">
            Submit Feedback
          </button>
        </div>
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
