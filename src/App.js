
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import ManageAll from './pages/ManageAll/ManageAll';
import MyItems from './pages/MyItems/MyItems';
import Register from './pages/Register/Register';
import ReauireAuth from './pages/RequireAuth/ReauireAuth';
import Footer from './shared/Footer/Footer';
import Headers from './shared/Headers/Headers';

function App() {
  return (
    <div >
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <ReauireAuth>
            <Inventory></Inventory>
          </ReauireAuth>
        }></Route>
        <Route path='/manage' element={
          <ReauireAuth>
            <ManageAll></ManageAll>
          </ReauireAuth>
        }></Route>
        <Route path='/add' element={
          <ReauireAuth>
            <AddNewItem></AddNewItem>
          </ReauireAuth>
        }></Route>
        <Route path='/myitem' element={
          <ReauireAuth>
            <MyItems></MyItems>
          </ReauireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
  // event.target.reset()
}

export default App;
