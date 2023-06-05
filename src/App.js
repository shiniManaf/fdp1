import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Addemp from './components/Addemp';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <View/>
{/* <Home/> */}
{/* <Addemp/> */}
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Addemp/>} />
  <Route path='/add' element={<View/>}/>
</Routes>
    </div>
  );
}

export default App;
