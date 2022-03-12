import Head from 'next/head';
import Weather from '../Components/Weather';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Weather</title>
      </Head>
      <Weather/>
    </>
  );
}

export default index;