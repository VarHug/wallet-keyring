import Header from './Header';
import ConverterForm from './ConverterForm';
import Content from './Content';

const Home = (): React.ReactElement => {
  return (
    <div className="app">
      <Header />
      <ConverterForm />
      <Content />
    </div>
  );
};

export default Home;
