/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import ResumeButton from '../components/ResumeButton';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import Resume from '../assets/pdfs/Rohans_Resume.pdf';

const AboutPageStyles = styled.div`
	padding: 20rem 0 10rem 0;
	.top-section {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.left {
		flex: 3;
	}
	.right {
		flex: 2;
	}
	.about__subheading {
		font-size: 2.2rem;
		margin-bottom: 2rem;
		span {
		background-color: var(--deep-dark);
		padding: 0.5rem;
		border-radius: 8px;
		}
	}
	.about__heading {
		font-size: 3.6rem;
		margin-bottom: 3rem;
	}
	.about__info {
		margin-bottom: 4rem;
		.para {
		max-width: 100%;
		}
	}
	.right {
		img {
		border: 2px solid var(--gray-1);
		}
	}
	.about__info__items {
		margin-top: 15rem;
	}
	.about__info__item {
		margin-bottom: 10rem;
	}
	.about__info__heading {
		font-size: 3.6rem;
		text-transform: uppercase;
	}
	@media only screen and (max-width: 768px) {
		padding: 10rem 0;
		.top-section {
		flex-direction: column;
		gap: 5rem;
		}
		.about__subheading {
		font-size: 1.8rem;
		}
		.about__heading {
		font-size: 2.8rem;
		}
		.about__info__heading {
		font-size: 3rem;
		}
	}
`;

export default function About() {
	return (
		<>
			<AboutPageStyles>
				<div className="container">
					<div className="top-section">
						<div className="left">
							<p className="about__subheading">
								Hi, I am <span>Rohan Dey</span>
							</p>
							<h2 className="about__heading">A 2nd-Year Computer Science Student at the University of Toronto</h2>
							<div className="about__info">
								<PText>
									I started coding when I was in the 10th grade. Coding is something I am very passionate about because I love
									how my actions can directly translate to cool designs and features.
									<br />
									<br />
									Furthermore, I have a great interest in cars and automation.
									I dream of a day where a lot of the world's daily tasks will be automated so that humanity as a whole can move on and progress even further scientifically.
								</PText>
							</div>
							<ResumeButton btnText="View CV" btnLink={Resume} />
						</div>
						<div className="right">
							<img src={AboutImg} alt="Rohan Dey" />
						</div>
					</div>
					<div className="about__info__items">
						<div className="about__info__item">
							<h1 className="about__info__heading">Education</h1>

							<AboutInfoItem
								title="University"
								items={['University Of Toronto']}
							/>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">My Skills</h1>

							<AboutInfoItem
								title="Languages"
								items={['Java', 'C/C++', 'Python', 'UNIX', 'React', 'React Native', 'SQL', 'NoSQL', 'JavaScript', 'Node.js']}
							/>
							<AboutInfoItem
								title="Knows"
								items={['English', 'French']}
							/>
							<AboutInfoItem
								title="Design"
								items={['Photoshop', 'Figma']}
							/>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Experiences</h1>

							<AboutInfoItem
								title="2019-2020"
								items={['LCPP Cultural Exchange Program']}
							/>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Certifications</h1>

							<AboutInfoItem
								title="2021"
								items={['3rd Place, Finalist at LSBU Virtual Inter-University Coding Hackathon 2021']}
							/>
							<AboutInfoItem
								title="2020"
								items={['International Baccalaureate Diploma']}
							/>
							<AboutInfoItem
								title="2020"
								items={['Bilingual Certificate']}
							/>
						</div>
					</div>
				</div>
			</AboutPageStyles>
		</>
	);
}