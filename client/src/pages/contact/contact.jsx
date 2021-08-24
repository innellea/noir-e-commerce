import React from 'react';

import { BodyContainer, ContactContainer } from './contact.styles';

const ContactPage = () => (
    <ContactContainer>
        <h5>GOT A QUESTION?</h5>
        <h1 style={{ textAlign: 'center' }}>Contact N O I R</h1>
        <p>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you{' '}
            <span role='img' aria-label='emoji'>
                🙂
            </span>
        </p>
        <BodyContainer>
            <div className='card'>
                <p>
                    Email:{' '}
                    <b>
                        <a href='mailto:example@gmail.com'>example@gmail.com</a>
                    </b>
                </p>
                <p>
                    Twitter:{' '}
                    <b>
                        <a href='#home'>Twitter Profile</a>
                    </b>
                </p>
                <p>
                    LinkedIn:{' '}
                    <b>
                        <a href='#home'>Linked Profile</a>
                    </b>
                </p>
            </div>
        </BodyContainer>
    </ContactContainer>
);

export default ContactPage;
