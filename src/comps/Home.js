import React, { useState } from 'react'
import Title from './Title'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'

const Home = ({setSelectedImg,selectedImg}) => {
    
  return (
    <div>
      {/* <UploadForm /> */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default Home