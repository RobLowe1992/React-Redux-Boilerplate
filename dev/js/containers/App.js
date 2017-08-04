import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "../../scss/style.scss";
import UserList from "../components/user-list";

const App = ({users}) => (
    <div>
        <h2>Username List:</h2>
        <UserList users={users} />
        <hr/>
        <h2>User Details:</h2>
    </div>
);

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(App);


