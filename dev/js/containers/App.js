import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "../../scss/style.scss";
import UserList from "../components/user-list";
import UserDetail from "../components/user-detail";
import * as Actions from "../actions";

const App = ({users, user, actions}) => (
    <div>
        <h2>Username List:</h2>
        <UserList
            users={users}
            actions={actions}
        />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail
            user={user}
        />
    </div>
);

const mapStateToProps = state => {
    return {
        users: state.users,
        user: state.activeUser
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators( Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


