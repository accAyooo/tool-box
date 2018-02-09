import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    render() {
        const result = this.props.userinfo.result;

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