import React from 'react';
import {fetchLogin} from './actions';
import {connect} from 'react-redux';
const style = {
    padding: "30px",
}

class Login extends React.Component {

    clickHandler() {
        this.props.login();
    }

    render() {
        return (
            <div style={style}>
                username:<input style={{marginBottom:"20px"}} className="username" type="text"/><br/>
                password:<input style={{marginBottom:"20px"}} className="password" type="text"/><br/>
                <input type="submit" onClick={this.clickHandler.bind(this)}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(fetchLogin());
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);