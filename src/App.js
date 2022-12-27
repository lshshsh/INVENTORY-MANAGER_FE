import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import StockInsert from './pages/StockInsert';
import React from 'react';
import Mypage from './pages/Mypage'
import AddNotice from './pages/AddNotice'
import EditStock from './pages/EditStock'
import Graph from './pages/Graph';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (sessionStorage.getItem('token') === null) {
      navigate("/", true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/MainPage" element={<MainPage></MainPage>} />
      <Route path="/Signup" element={<SignUp></SignUp>} />
      <Route path="/StockInsert" element={<StockInsert></StockInsert>} />
      <Route path="/Mypage" element={<Mypage></Mypage>} />
      <Route path="/AddNotice" element={<AddNotice></AddNotice>}/>
      <Route path="/EditStock" element={<EditStock></EditStock>}/>
      <Route path="/Graph" element={<Graph></Graph>}/>
    </Routes>
  )
}

export default App;