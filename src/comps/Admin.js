import React from 'react'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import SignIn from './SignIn'
import Auth from './Auth'

const Admin = ({ setSelectedImg, selectedImg, user, selectedImgId, setSelectedImgId }) => {
    return (
        <div>
            {user ? (
                <div>
                    <UploadForm />
                    <ImageGrid setSelectedImg={setSelectedImg} setSelectedImgId={setSelectedImgId} />
                    {selectedImg && (
                        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}
                            selectedImgId={selectedImgId}
                            setSelectedImgId={setSelectedImgId} user={user}
                        />
                    )}
                </div>
            ) : (
                <Auth />
            )}


        </div>
    )
}

export default Admin