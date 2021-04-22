import Header from './Header';
import DerivationPath from './DerivationPath';
import Content from './Content';

const Home = (): React.ReactElement => {
  return (
    <div className="app">
      <Header />
      <DerivationPath />
      <Content />
    </div>
  );
};

export default Home;
