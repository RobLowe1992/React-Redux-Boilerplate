import React, { Component } from 'react';

export default class UserList extends Component {
    constructor(props){
        super(props);
    }

    createListItems(){
        return this.props.users.map((user)=>{
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            );
        });
    }
    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}


