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
    getUserInfoData () {
        getUserInfo()
    }
    render() {
        // let { userinfo } = this.props
        return(
            <div onClick={this.getUserInfoData.bind(this)}>{"我是个按钮"}</div>
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