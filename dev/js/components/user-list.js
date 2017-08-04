import React, { Component } from 'react';

export default class UserList extends Component {
    createListItems(){
        return this.props.users.map((user)=>{
            return (
                <li
                    key={user.id}
                    onClick={()=> this.props.actions.selectUser(user)}>
                    {user.first} {user.last}
                </li>
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


