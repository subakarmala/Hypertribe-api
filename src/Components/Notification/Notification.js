import React from 'react'
import "./Notification.css"

const Notification = () => {
    return (
      <div>
        <div className="whiteBox notificationBox">
          <div className="whiteBox__heading">Notifications</div>
          <div className="notificationsInfo">
            <p className="desc">
              Aenean maximus volutpat ipsum, quis lacinia felis ullamcorper ac.
              Ut non vehicula mi, at suscipit orci. Etiam laoreet nunc est, a
              rhoncus elit dignissim ac.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Notification
