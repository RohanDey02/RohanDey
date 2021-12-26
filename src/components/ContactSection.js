/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { MdBookmark } from 'react-icons/md';
import Title from './Title';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactStyle = styled.div`
    padding: 10rem 0;
    .contactSectionWrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSectionWrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left {
        width: 100%;
        max-width: 500px;
    }
    .right {
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
    }
    @media only screen and (max-width: 768px) {
        .contactSectionWrapper {
            flex-direction: column;
        }
        .contactSectionWrapper::after {
            display: none;
        }
        .left,
        .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

export default function ContactSection() {
    const text = `rohan.dey@mail.utoronto.ca`;
    
    return (
        <ContactStyle>
            <div className="container">
                <Title heading="Contact" />
                <div className="contactSectionWrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdBookmark />} text="Feel free to contact me either by email or through the contact form on the right!" />
                        <ContactInfoItem text={text} />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactStyle>
    )
}