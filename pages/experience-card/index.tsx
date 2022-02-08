// https://kids-dev.baicizhan.com/api/yzy/launch/get/launch/info?launchId=562

import { LazyLoadList } from "@yzy/web-components";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next";

import styles from "./index.module.less";

export default function ExperienceCard({ data }) {
  const router = useRouter();

  const { materialPics } = data;

  return (
    <div>
      <div style={{ paddingBottom: "1.6rem" }}>
        <LazyLoadList
          className={styles["lazyload-wrapper"]}
          list={materialPics || []}
        />
      </div>

      <Head>
        <title>yzy-试听课售卖</title>
      </Head>
    </div>
  );
}

const serverSideApi = function (data) {
  return axios.get(
    `http://localhost:9001/api/yzy/launch/get/launch/info?${new URLSearchParams(
      data
    ).toString()}`
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { launchId } = context.query;
  let data = { key: 1, data: 2 };
  try {
    ({
      data: { data },
    } = await serverSideApi({ launchId }));
  } catch (e) {
    console.log("error", e);
  }

  return {
    props: {
      data,
    },
  };
};
