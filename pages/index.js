import Head from 'next/head';
import Weather from './Components/Weather';
import Input from './Components/Input';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Weather</title>
      </Head>
      <Input/>
      <Weather/>
    </>
  );
}

export default index;