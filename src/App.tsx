import './App.css'

import ThemeContextProvider from "./store/ThemeContextProvider";
import Header from "./components/Header";
import Wrapper from './components/Wrapper';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App: React.FC = ()=>{

  return (
    <ThemeContextProvider>
        <ToastContainer />
        <Header />
        <Wrapper />
    </ThemeContextProvider>
  );
}

export default App;