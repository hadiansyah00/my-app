import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home/>
      </main>
    </>
)
}


export default App;
