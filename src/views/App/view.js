import React from 'react';
import Home from "../Home/index";
import { view as Login } from '../Login';
import {commonActions} from '../../stores'
import { connect } from 'react-redux';
import {HTTP_STATUS} from "../../constants/httpConstants";

class App extends React.Component {

    componentDidMount() {
        this.props.getUserinfo();
    }

    render() {
        const userinfo = this.props.common.userinfo;
        const status = userinfo.status;
        const result = userinfo.result;

        if (status === HTTP_STATUS.LOADING) {
            return(
                <div>
                    loading...
                </div>
            )
        }
        if (status === HTTP_STATUS.SUCCESS && result.code === 1) {
            return (
                <div>
                    <Home/>
                </div>
            )
        }
        return (
            <div>
                <Login/>
            </div>
        )
    }
}
const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({getUserinfo: () => {dispatch(commonActions.fetchGetUserinfo())}})

export default connect(mapStateToProps, mapDispatchToProps)(App);