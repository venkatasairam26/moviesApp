import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import Header from '../Header/index'
import Footer from '../Footer/index'

import './index.css'

class Account extends Component {
  onLogoutUser = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <div className="account-container">
        <Header />

        <div className="account-card">
          <h1 className="account-heading">Account</h1>
          <hr className="h-line" />
          <div className="member-ship">
            <p className="details-text">Member ship</p>
            <div className="user-details">
              <p>venkatasairam@gmail.com</p>
              <p>Password : *******</p>
            </div>
          </div>
          <hr className="h-line" />
          <div className="plan-details">
            <p className="plans"> Plan details</p>
            <p>Premium</p>
            <p className="ultra-btn">Ultra HD</p>
          </div>
          <hr className="h-line" />
          <div className="log-cont">
            <div>
              <Popup
                modal
                trigger={
                  <button type="button" className="logout-btn">
                    Logout
                  </button>
                }
              >
                {close => (
                  <div className="popup-container">
                    <button
                      type="button"
                      className="logout-btn"
                      onClick={this.onLogoutUser}
                    >
                      confirm
                    </button>

                    <button
                      type="button"
                      className="logout-btn close-btn"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Account
