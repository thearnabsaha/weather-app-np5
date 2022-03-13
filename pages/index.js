import Head from 'next/head';
import Weather from '../Components/Weather';
const index = ({data}) => {
  return (
    <>
      <Head>
        <title>TAS Weather</title>
      </Head>
      <Weather data={data}/>
    </>
  );
}

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=37a5daa95bc7084635e04654911452c8`)
  const data = await res.json()
  return {
      props:{
          data:data,
      }
  }
}