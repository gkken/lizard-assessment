import Layout from 'components/Layout';
import MainContainer from 'components/MainContainer';
import DynamicHeader from 'components/DynamicHeader';

function App() {
  return (
    <>
      <Layout>
        <DynamicHeader />
        <MainContainer />
      </Layout>
    </>
  );
}

export default App;
