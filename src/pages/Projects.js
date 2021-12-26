/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import Title from '../components/Title'
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/Projects';

const ProjectStyles = styled.div`
	padding: 10rem 0;
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 5rem;
		margin-top: 5rem;
	}
	.projectSearchBar {
		position: relative;
		width: 300px;
		margin-top: 5rem;
	}
	.projectSearchBar input {
		width: 100%;
		font-size: 2rem;
		padding: .8rem;
		color: var(--black);
		border-radius: 6px;
		outline: none;
		border: none;
	}
	.projectSearchBar .searchIcon {
		position: absolute;
		width: 2rem;
		right: 1rem;
	}
	.projectSearchBar .searchIcon path {
		color: var(--deep-dark);
	}
	@media only screen and (max-width: 768px) {
		.projectSearchBar,
		.projectSearchBar form,
		.projectSearchBar input {
			width: 100%;
		}
	}
`;

export default function Projects() {
	const [searchText, setSearchText] = useState('');
	const [projectData, setProjectData] = useState(ProjectInfo);

	useEffect(() => {
		if(searchText === '') {
			return;
		}
		setProjectData(() => 
			ProjectInfo.filter(item => (
				item.name.toLowerCase().match(searchText.toLowerCase())
			))
		);
	}, [searchText]);

	function handleChange(e) {
		e.preventDefault();
		setSearchText(e.target.value);
		if (!e.target.value.length > 0) {
			setProjectData(ProjectInfo);
		}
	}

	return (
		<ProjectStyles>
			<div className='container'>
				<Title heading="Rohan's Projects" />
				<div className="projectSearchBar">
					<form>
						<input
							type="text"
							value={searchText}
							onChange={handleChange}
							placeholder="Enter Project Name"
						/>
						<MdSearch className="searchIcon" />
					</form>
				</div>
				<div className='projects'>
					{projectData.map((item) => (
						<ProjectItem key={item.id} title={item.name} desc={item.desc} image={item.image} />
					))}
				</div>
			</div>
		</ProjectStyles>
	);
}