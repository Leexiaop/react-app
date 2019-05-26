import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getMaleInfo, getFemaleInfo } from '../../actions/index';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    render() {
        let { userinfo } = this.props
        return(
            <div>{"userinfo" + userinfo}</div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

export default connect(mapStateToProps, {
    getUserInfo,
    getMaleInfo,
    getFemaleInfo
})(User)