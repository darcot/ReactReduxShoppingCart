import React from 'react';
import { connect } from 'react-redux';
import Notification from './../components/Notification'
import { notificationOnComplete } from './../actions'

const NotificationContainer = ({ messages, showNotifications ,notificationOnComplete}) => {

    return (<div>
        {showNotifications ? <Notification message={messages} notificationOnComplete={notificationOnComplete} /> : ""}</div>)
};


const mapStateToProps = (state) => ({
    messages: state.notifications.messages,
    showNotifications: state.notifications.showNotifications,
})

export default connect(
    mapStateToProps, { notificationOnComplete })(NotificationContainer);  
