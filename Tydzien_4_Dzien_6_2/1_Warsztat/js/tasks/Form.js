import React from "react";


export default
class Form extends React.Component{
    render() {
        return(
            <form className="form-group" className="new-task">
                <h2>Add new task</h2>
                <input type="text" className="form-control" name="title" placeholder="Title" />
                    <input type="text" className="form-control" name="description" placeholder="Description"/>
                    <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        )
    }
}



