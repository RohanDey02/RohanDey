/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol.js';
import PText from './PText';

const FooterStyle = styled.div`
    background-color: var(--deep-dark);
    padding-top: 10rem;
    .container {
        display: flex;
        gap: 3rem;
    }
    .footerCol1 {
        flex: 2;
    }
    .footerCol2,
    .footerCol3,
    .footerCol4 {
        flex: 1;
    }
    .footerCol1Title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footerCol1 .para {
            max-width: 100%;
        }
        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footerCol1">
                    <h1 className="footerCol1Title">Rohan Dey</h1>
                    <PText>
                        A 3rd-Year Undergraduate Student at the University of Toronto doing a Specialist in Computer Science, Software Engineering Stream.
                    </PText>
                </div>
                <div className="footerCol2">
                    <FooterCol
                        heading="Important Links"
                        links={[
                            {
                                title: 'Home',
                                path: '/RohanDey',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/RohanDey/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/RohanDey/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/RohanDey/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footerCol3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: 'rohan.dey@mail.utoronto.ca',
                                path: 'mailto:rohan.dey@mail.utoronto.ca',
                            },
                        ]}
                    />
                </div>
                <div className="footerCol4">
                    <FooterCol
                        heading="Socials"
                        links={[
                            {
                                title: 'LinkedIn',
                                path: 'https://www.linkedin.com/in/rohan-dey-30ba9b1b6/',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2021 - Rohan Dey | Designed By Rohan Dey
                    </PText>
                </div>
            </div>
        </FooterStyle>
    );
}