import React from 'react';
import Home from "../Home/index";
import {commonActions} from '../../stores'
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        this.props.getUserinfo();
        console.log(this.props);
    }

    render() {
        return (
            <Home/>
        )
    }
}
const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({getUserinfo: () => {dispatch(commonActions.fetchGetUserinfo())}})

export default connect(mapStateToProps, mapDispatchToProps)(App);