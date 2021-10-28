import React from "react";

export default class Task extends React.Component{
    render() {
        return(
            <li className="list-group-item active task-description">
                <h2>Title</h2>
                <p>Description</p>
                <a href="" class="btn btn-secondary float-right">Finish</a>
                <a href="" class="btn btn-secondary float-right">Add operation</a>
            </li>
        )
    }
}
