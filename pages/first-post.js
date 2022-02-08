import Link from "next/Link";
import Head from "next/head";
import axios from "axios";

export default function FirstPost({ data }) {
  console.log("data", data);
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="111">back to home</a>
        </Link>
        <Link href="https://baidu.com">跳到外部应用不使用link，使用a</Link>
      </h2>

      <img width="200" src="/images/profile.jpg" alt="" />

      <Head>
        <title>First Post</title>
      </Head>
    </div>
  );
}

const serverSideApi = function (data) {
  return axios.get("http://localhost:9001/api/yzy/order/skuList/appSell/get");
};
export async function getServerSideProps(context) {
  const { data } = await serverSideApi();

  return {
    props: {
      serverSideData: data,
    },
  };
}
