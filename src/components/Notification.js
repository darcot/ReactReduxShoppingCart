import React from "react";
import "./Notification.scss"


export default class Notification extends React.Component {
    componentDidMount(){
        setTimeout(()=>this.props.notificationOnComplete(),3000);

    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.message!==this.props.message){
            setTimeout(()=>this.props.notificationOnComplete(),3000);
        }
     
    }
    render() { 
        return(    <div className="Notification"> {this.props.message}</div>)
    }
   }