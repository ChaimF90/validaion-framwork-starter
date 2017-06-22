import React from 'react';
import { connect } from 'react-redux';
import * as errorActions from '../actions/actions';

class Form extends React.Component {

    submit = () => {
        let hasError = false;
        this.props.children.forEach(child => {
            let props = child.props;
            if(props.required && !props.value) {
                hasError = true;
                let errorObj = {
                    name: props.name,
                    message: props.errorMessage
                }
                this.props.addErrorsSuccess(errorObj);
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


export default connect(null, errorActions)(Form);



