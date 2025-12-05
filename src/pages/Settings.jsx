import React from 'react'
import "../styles/Settings.css"

export default function Settings() {
  return (
    <>
      <h1>Account Settings</h1>
      <p>Manage your account preferences and security</p>

      <div className="forms-container">

        <section>
          <h2>Profile Information</h2>
          <form>
            <div className='inline-inputs'>
              <div className='input-container '>
                <label>Full Name</label>
                <input type="text" name="fullname"/> {/*CONTENT: FULL NAME OF USER */}
              </div>  
              <div className='input-container '>
                <label>Email</label>
                <input type="text" name="fullname"/> {/*CONTENT: EMAIL OF USER */}
              </div>
            </div>
            <button>Save Changes</button>
          </form>
        </section>

        <section>
          <h2>Change Password</h2>
          <form>
            <div className='input-container '>
              <label>Current Password</label>
              <input type="password" name="current-password"/> 
            </div>
              <div className='inline-inputs'>
                <div className='input-container '>
                  <label>New Password</label>
                  <input type="password" name="new-password"/> 
                </div >
                <div className='input-container '>
                  <label>Confirm New Password</label>
                  <input type="password" name="confirm-new-password"/>
                </div>
              </div>
            <button>Update Password</button>
          </form>
        </section>

        <div className='danger-zone'>
          <h2>Danger Zone</h2>
          <p>Once you delete your account, there is no going back. All your programs and meal plans will be permanently deleted.</p>
          <button>Delete Account</button>
        </div>

      </div>
    </>
  )
}
