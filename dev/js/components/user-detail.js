import React, { Component } from 'react';

export default class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return (<h4>Select a User...</h4>)
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} alt="User Picture"/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.age}</h3>
                <h3>{this.props.user.description}</h3>
            </div>
        )
    }
}