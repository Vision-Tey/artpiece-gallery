import React from 'react'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import SignIn from './SignIn'
import Auth from './Auth'

const Admin = ({ setSelectedImg, selectedImg, user }) => {
    return (
        <div>
            {user ? (
                   <div>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )}
            </div>
            ) : (
                <Auth />
            )}
         

        </div>
    )
}

export default Admin