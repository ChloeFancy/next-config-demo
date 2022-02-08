import Document, { Html, Head, Main, NextScript } from "next/document";

// 只在服务器端渲染，所以dom元素无效
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html style={{ color: "#0000f0" }} lang="en">
        <Head>
          {/* <title>11</title> */}
          {/* 优先级低于页面内的HEAD */}
        </Head>
        {/* Head 为所有页面通用的head信息  */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
