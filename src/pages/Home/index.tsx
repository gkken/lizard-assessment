import { Helmet as Head } from 'react-helmet-async';
import App from 'App';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Naluri Web - Chat</title>
      </Head>
      <App />
    </>
  );
};

export default HomePage;
