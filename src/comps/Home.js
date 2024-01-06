import React, { useState } from 'react'
import Title from './Title'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'

const Home = ({setSelectedImg,selectedImg, selectedImgId, setSelectedImgId}) => {
    
  return (
    <div>
      {/* <UploadForm /> */}
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedImgId={setSelectedImgId} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedImgId={selectedImgId} setSelectedImgId={setSelectedImgId}  />
      )}
    </div>
  )
}

export default Home