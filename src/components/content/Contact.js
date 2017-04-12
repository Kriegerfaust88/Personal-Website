import React from 'react';
import ContactForm from './ContactForm';

class Contact extends React.Component {
    render() {
        return (
            <div className="content-area">
                <h2>Contact</h2>
                <ContactForm></ContactForm>
            </div>
        );
    }
}

export default Contact;
