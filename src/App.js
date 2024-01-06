import React, { useEffect, useState } from 'react';
import { auth } from './firebase/config';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './comps/Home';
import Admin from './comps/Admin';
import SignIn from './comps/SignIn';
import Auth from './comps/Auth';
import { signOut } from 'firebase/auth';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgId, setSelectedImgId] = useState(null)
  const [active, setActive] = useState("home");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      Navigate("/auth")
    })
  }


  return (
    <div className="App">
      <Title user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home selectedImg={selectedImg} setSelectedImg={setSelectedImg}
          selectedImgId={selectedImgId}
          setSelectedImgId={setSelectedImgId} />} />
        <Route path='/admin' element={<Admin selectedImg={selectedImg}
          setSelectedImg={setSelectedImg} user={user} selectedImgId={selectedImgId}
          setSelectedImgId={setSelectedImgId} />} />
        <Route path='/auth' element={<Auth setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
