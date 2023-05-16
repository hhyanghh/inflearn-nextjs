import { useState, useEffect } from 'react';
// import NoSSR from ;
import dynamics from 'next/dynamic';

const NoSSR = dynamics(() => import('../../../components/section01/NoSSR'), {
  ssr: false,
});

const Example = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>

      <h1>NoSSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;
