/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
    .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
        display: inline-block;
        width: 100%;
        }
        .hero__name {
        font-family: 'Montserrat SemiBold';
        font-size: 7rem;
        color: var(--white);
        }
    }
    .hero__img {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info {
        margin-top: -18rem;
    }
    @media only screen and (max-width: 768px) {
        .hero {
            min-height: 750px;
            }
            .hero__heading {
                font-size: 1.4rem;
                margin-bottom: -3rem;
                .hero__name {
                    font-size: 4.5rem;
                }
            }
            .hero__img {
                height: 300px;
            }
            .hero__info {
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
                    <h1 className="hero__heading">
                        <span>I am</span>
                        <span className="hero__name">Rohan Dey</span>
                    </h1>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero__info">
                        <PText>
                            I am 2nd-Year Undergraduate Student at the University of Toronto doing a Specialist in Computer Science, Software Engineering Stream.
                        </PText>
                        <Button btnText="Check out my projects!" btnLink="/RohanDey/projects" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
}