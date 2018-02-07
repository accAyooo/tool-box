import React from 'react';
import { connect } from 'react-redux';
import { fetchGetUserinfo } from "../../actions/userinfo";
import {HTTP_STATUS} from "../../constants/httpConstants";
import { createBrowserHistory as history } from 'history';
import Login from "../Login/view";


class App extends React.Component {

    componentDidMount() {
        this.props.getUserinfo();
    }

    render() {
        if (this.props.userinfo.status === HTTP_STATUS.LOADING) {
            return (
                <div>loading...</div>
            )
        } else if (this.props.userinfo.status === HTTP_STATUS.ERROR) {
            return (
                <Login/>
            )
        } else if (this.props.userinfo.status === HTTP_STATUS.SUCCESS) {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    userinfo: state.App
});

const mapDispatchToProps = (dispatch) => {
    return {
        getUserinfo: () => {
            dispatch(fetchGetUserinfo());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);