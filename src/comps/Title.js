import React from 'react'

const Title = ({ user, handleLogout }) => {
    return (
        <div className="title">
            <div className='top-title'>
                <h1 style={{fontSize: '25px'}}>Lulu Jovic's</h1>
                <div style={{marginTop: '8px'}}>
                      {user ?  <h1 style={{color: '#4e4e4e'}}>Welcome, {user.displayName}!</h1> : <h1 style={{color: '#4e4e4e'}}>Welcome, client!</h1>}
                      {user && <button onClick={handleLogout}>Logout</button>}
                </div>
              
            </div>

            <h2>Artistry Haven</h2>
            <p>Embark on a captivating journey into the realm of artistic wonders</p>
        </div>
    )
}

export default Title