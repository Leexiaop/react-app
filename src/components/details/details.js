import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Toast } from 'antd-mobile'
import { getDetails, getMaleDetails, getFemaleDetails } from '../../actions/index';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
        this.handleDetailsClick = this.handleDetailsClick.bind(this)
    }
    handleDetailsClick = () => {
        this.props.getDetails()
        Toast.success('我现在在用antd-mobile组件', 1)
    }  
    handleMaleDetailsClick = () => {
        this.props.getMaleDetails()
    }  
    handleFemaleDetailsClick = () => {
        this.props.getFemaleDetails()
    }
    render() {
        let { detailObj } = this.props
        return(
            <div>
                <div onClick={this.handleDetailsClick}>{"detailObj" + detailObj}</div>
                <div onClick={this.handleMaleDetailsClick}>{"detailMaleObj" + detailObj}</div>
                <div onClick={this.handleFemaleDetailsClick}>{"detailFemaleObj" + detailObj}</div>
            </div>
        )
    }
}
Details.propTypes = {
    getDetails: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    console.log(state)
    return {
        detailObj: state.detailObj
    }
}
export default connect(mapStateToProps, {
    getDetails,
    getMaleDetails,
    getFemaleDetails
})(Details)