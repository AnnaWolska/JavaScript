import React from "react";

import Task from "./Task";

export default
class Tasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:null
        }
    }



    render() {

        return(
            <ul>
                {this.state.tasks.forEach(task => {
                    <Task task={task}/>
                })}
            </ul>
        )
    }
}



