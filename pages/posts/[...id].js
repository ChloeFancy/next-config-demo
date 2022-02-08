export default function Post({ id }) {
  console.log("id", id);
  // http://localhost:3000/posts/1/2/3 id: ['1', '2', '3']
  return <div>id: {id}</div>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id

  return {
    paths: [
      {
        params: {
          id: ["1"], // 必须是字符串！
        },
      },
      {
        params: {
          id: ["2"],
        },
      },
      {
        params: {
          id: ["3"],
        },
      },
    ],
    fallback: false,
  };
}
