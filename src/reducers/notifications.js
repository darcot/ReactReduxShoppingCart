import {
    ADD_TO_CART, SHOW_NOTIFICATIONS, NOTIFICATION_COMPLETE
} from './../constants/Actiontypes';


const notifications = (state = {
    messagesQueue: [],
    messages: "",
    showNotifications: false
}, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATIONS:
            if (!state.showNotifications) {
                return {
                    messages:`${action.itemName} added successfully`,
                    showNotifications: true,
                    messagesQueue: []
                }
            } else {
                const messagesQueue = [...state.messagesQueue, `${action.itemName} added successfully`]
                return {
                    ...state,
                    messagesQueue
                }
            }
        case NOTIFICATION_COMPLETE:
            if (state.messagesQueue.length > 0) {
                const messages=state.messagesQueue.shift();
                return {
                    ...state,
                    messages
                }
            } else {
                return {
                    messages: "",
                    showNotifications: false,
                    messagesQueue: []
                }
            }

        default:
            return state;
    }
}
export default notifications;