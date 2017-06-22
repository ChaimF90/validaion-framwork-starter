import React from 'react';
import isEven from '../checkForEven';

export default class Input extends React.Component {
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

    render() {
        let error;
        if(this.state.hasError) {
            error = <span>{this.props.errorMessage}</span>
        }
        return (
            <div>
                {error}
                <br />
                <input 
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
                onChange={this.props.changeHandler}
                placeholder={this.props.placeholder}
                onBlur={this.blurHandler} />
            </div>
        )
    }
}