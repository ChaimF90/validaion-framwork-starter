import React from 'react';
import { connect } from 'react-redux';
import * as errorsActions from '../actions/actions'

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }


    blurHandler = (e) => {
        let state = Object.assign({}, this.state);
        if(this.props.required && !this.props.value) {
            state.hasError = true;
        }

        this.setState(state);
    }

    changeHandler = (e) => {
        // let event = {
        //     target: {
        //         name: e.target.name,
        //         value: e.target.value
        //     }
        // };
        this.props.changeHandler(e);
        let currentInput = this.props.errors.find(e => e.name === this.props.name);
        if(currentInput) {
            this.props.removeErrorSuccess(currentInput);
        } else {
            let state = Object.assign({}, this.state);
            state.hasError  = false;
            this.setState(state);
        }
        
    } 

    render() {
        let error;
        let currentInput = this.props.errors.find(e => e.name === this.props.name);
        if(this.state.hasError || currentInput) {
            let errorMessage = this.props.errorMessage || currentInput.errorMessage;
            error = <span>{errorMessage}</span>
        }
        return (
            <div>
                {error}
                <br />
                <input 
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
                onChange={this.changeHandler}
                placeholder={this.props.placeholder}
                onBlur={this.blurHandler} />
            </div>
        )
    }
}
 function mapStateToProps(state) {
    return {
        errors: state.errors
    }
 }

export default connect(mapStateToProps, errorsActions)(Input);



