import Header from './Header';
import HDPathFilter from './HDPathFilter';
import Content from './Content';

const Home = (): React.ReactElement => {
  return (
    <div className="app">
      <Header />
      <HDPathFilter />
      <Content />
    </div>
  );
};

export default Home;
