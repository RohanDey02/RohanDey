/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImage from '../assets/images/project-image.png';

const ProjectItemStyles = styled.div`
    .projectItemImage {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img {
            height: 100%;
        }
    }
    .projectItemInfo {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItemTitle {
        font-size: 2.2rem;
    }
    .projectItemDesc {
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .projectItemImage {
            height: 350px;
        }
    }
`;

export default function ProjectItem({
    image = ProjectImage,
    title = 'Project Name',
    desc = 'Project Description',
}) {
    return (
        <ProjectItemStyles>
            <Link to="/RohanDey/projects" className="projectItemImage">
                <img src={image} alt="Project Img" />
            </Link>
            <div className="projectItemInfo">
                <Link to="#">
                    <h3 className="projectItemTitle">{title}</h3>
                </Link>
                <p className="projectItemDesc">{desc}</p>
            </div>
        </ProjectItemStyles>
    );
}