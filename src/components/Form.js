import React from 'react';
import isEven from '../checkForEven';

export default class Form extends React.Component {

    submit = () => {
        let hasError = false;
        this.props.children.forEach(child => {
            let props = child.props;
            if(props.required && !props.value) {
                hasError = true;
            }
            if(props.custom) {
                hasError = props.rule();
            }
        })

        if(!hasError) {
            this.props.submit();
        }
    }

    render() {
        return (
            <form>
                {this.props.children}
                <button type="button" onClick={this.submit}>Save</button>
            </form>
        )
    }
}