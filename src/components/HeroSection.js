/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/Network.gif';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
    .hero {
        height: 100vh;
        min-height: 800px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .heroHeading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .heroName {
            font-family: 'Montserrat SemiBold';
            font-size: 7rem;
            color: var(--white);
        }
    }
    .heroImg {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .heroInfo {
        margin-top: -20rem;
    }
    @media only screen and (max-width: 768px) {
        .hero {
            min-height: 750px;
            }
            .heroHeading {
                font-size: 1.4rem;
                margin-bottom: -3rem;
                .heroName {
                    font-size: 4.5rem;
                }
            }
            .heroImg {
                height: 300px;
            }
            .heroInfo {
                margin-top: 3rem;
            }
        }
    }
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="heroHeading">
                        <span className="heroName">Rohan Dey</span>
                    </h1>
                    <div className="heroImg">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="heroInfo">
                        <PText>
                            I am a 4th-Year Undergraduate Student at the University of Toronto completing a Specialist in Computer Science, Software Engineering Stream.
                        </PText>
                        <Button btnText="Check out my projects!" btnLink="/RohanDey/projects" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
}