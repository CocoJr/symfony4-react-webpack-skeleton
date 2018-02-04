import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './form';

class Create extends React.Component
{
    submit(values) {
        // print the form values to the console
        console.log(values);
    };

    render() {
        return <ContactForm onSubmit={this.submit} />
    }
}

export default connect()(Create);