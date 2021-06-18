import React from 'react';
import ToDo from './ToDo';

export default class List extends React.Component {
    render() {
        let toDoComponentList = this.props.list.map((element, index) => <ToDo key={index} task={element} />);

        return (
            <div className="App">
                {toDoComponentList}
            </div>
        );
    }
}