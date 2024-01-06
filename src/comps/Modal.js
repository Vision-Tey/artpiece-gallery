import React from 'react';
import { motion } from 'framer-motion';
import { deleteDoc, doc } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const Modal = ({ setSelectedImg, selectedImg, selectedImgId, setSelectedImgId, user }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image ?")) {
      try {
        await deleteDoc(doc(projectFirestore, "images", id));

        // toast.success("Blog deleted successfully")
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {user ? (<div className='delete_sec'>
        <button onClick={() => handleDelete(selectedImgId)} className='delete_btn'>Delete Picture</button>
      </div>) : "" }
      
      <motion.img src={selectedImg} alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />

    </motion.div>
  )
}

export default Modal;