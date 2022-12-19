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
	.aboutSubheading {
		font-size: 2.2rem;
		margin-bottom: 2rem;
		span {
		background-color: var(--deep-dark);
		padding: 0.5rem;
		border-radius: 8px;
		}
	}
	.aboutHeading {
		font-size: 3.6rem;
		margin-bottom: 3rem;
	}
	.aboutInfo {
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
	.aboutInfoItems {
		margin-top: 15rem;
	}
	.aboutInfoItem {
		margin-bottom: 10rem;
	}
	.aboutInfoHeading {
		font-size: 3.6rem;
		text-transform: uppercase;
	}
	@media only screen and (max-width: 768px) {
		padding: 10rem 0;
		.top-section {
			flex-direction: column;
			gap: 5rem;
		}
		.aboutSubheading {
			font-size: 1.8rem;
		}
		.aboutHeading {
			font-size: 2.8rem;
		}
		.aboutInfoHeading {
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
							<p className="aboutSubheading">
								Hi, I am <span>Rohan Dey</span>
							</p>
							<h2 className="aboutHeading">A 4th-Year Computer Science Student at the University of Toronto</h2>
							<div className="aboutInfo">
								<PText>
									I began programming when I was in the 10th grade. At the moment, I am currently learning about efficient algorithms and virtualization infrastructures such as Docker and Kubernetes.
								</PText>
							</div>
							<ResumeButton btnText="View CV" btnLink={Resume} />
						</div>
						<div className="right">
							<img src={AboutImg} alt="Rohan Dey" />
						</div>
					</div>
					<div className="aboutInfoItems">
						<div className="aboutInfoItem">
							<h1 className="aboutInfoHeading">Education</h1>

							<AboutInfoItem
								title="University"
								items={['University Of Toronto']}
							/>
						</div>
						<div className="aboutInfoItem">
							<h1 className="aboutInfoHeading">My Skills</h1>

							<AboutInfoItem
								title="Technical"
								items={['Java', 'Python', 'C/C++', 'Kubernetes', 'Docker', 'Bash', 'React', 'PostgreSQL', 'MongoDB', 'ElasticSearch']}
							/>
							<AboutInfoItem
								title=""
								items={['JavaScript (Node.js)', 'Haskell']}
							/>
							<br />
							<AboutInfoItem
								title="Fluent In"
								items={['English', 'French']}
							/>
							<AboutInfoItem
								title="Prototyping"
								items={['Figma', 'Photoshop']}
							/>
						</div>
						<div className="aboutInfoItem">
							<h1 className="aboutInfoHeading">Experiences</h1>

							<AboutInfoItem
								title="2023"
								items={['Full Stack Developer @ KPMG']}
							/>
							<AboutInfoItem
								title="2022"
								items={['Software Developer @ BLiNQ Networks']}
							/>
							<AboutInfoItem
								title="2019-2020"
								items={['LCPP Cultural Exchange Program']}
							/>
						</div>
						<div className="aboutInfoItem">
							<h1 className="aboutInfoHeading">Awards & Certifications</h1>

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