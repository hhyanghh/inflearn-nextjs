const Example = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  const delaySeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delaySeconds * 1000)
  );

  return {
    props: { data },
  };
};
