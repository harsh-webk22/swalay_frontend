import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import "./App.css"; // Create this CSS file for your custom styles

const App = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const notificationText = prompt("Enter notification text");
    if (notificationText) {
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString();

      const newNotification = (
        <div className="notification-list" key={notifications.length}>
          <div className="notification-list_content">
            <div className="notification-list_detail">
              <p className="text">
                <b>{notificationText}</b>
              </p>
              <p className="text-muted">
                <small>{dateTimeString}</small>
              </p>
            </div>
          </div>
        </div>
      );

      setNotifications([newNotification, ...notifications]);
    }
  };

  return (
    <section className="section-50">
      <div className="container">
        <h3 className="m-b-50 heading-line">
          <span>
            Notifications <i className="fa fa-bell text-muted"></i>
          </span>
          <div className="add-notification-button">
            <span className="text-muted">Add Notification</span>
            <button
              id="addNotificationBtn"
              className="btn btn-primary"
              onClick={addNotification}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </h3>

        <div id="notificationContainer" className="notification-ui_dd-content">
          {notifications}
        </div>
      </div>
    </section>
  );
};

export default App;
