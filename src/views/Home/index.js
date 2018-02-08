import React from 'react';
import { connect } from 'react-redux';
import {
    FETCH_GET_USERINFO_ERROR, FETCH_GET_USERINFO_LOADING,
    FETCH_GET_USERINFO_SUCCESS
} from "../../stores/actionTypes";
import {HTTP_STATUS} from "../../constants/httpConstants";

class Home extends React.Component {

    render() {
        const result = this.props.userinfo.result;
        const status = this.props.userinfo.status;

        return (
            <div>
                {result.user}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userinfo: state.common.userinfo
})

export default connect(mapStateToProps)(Home);