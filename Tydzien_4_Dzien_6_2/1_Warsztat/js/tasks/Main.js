import React from "react";

import Tasks from "./Tasks";
import Form from "./Form";

export default
class Main extends React.Component{
    render() {
        return(
            <div className="jumbotron container todo-app">
                <Form/>
                <Tasks/>
            </div>
        )
    }
}



