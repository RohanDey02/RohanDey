/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { MdBookmark } from 'react-icons/md';
import Title from './Title';
import ContactInfoItem from './ContactInfoItem';

const ContactStyle = styled.div`
    padding: 10rem 0;
    .contactSectionWrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .left {
        width: 100%;
    }
    @media only screen and (max-width: 768px) {
        .contactSectionWrapper {
            flex-direction: column;
        }
        .left,
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
                        <ContactInfoItem icon={<MdBookmark />} text="Feel free to contact me by email!" />
                        <ContactInfoItem text={text} />
                    </div>
                </div>
            </div>
        </ContactStyle>
    )
}