/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import PawsupImage from '../images/pawsup-app.png';
import MedicalSupplyChainsImage from '../images/medical-supply-chains.png';

const projects = [
    {
        id: uuidv4(),
        name: 'Pawsup App',
        desc: 'A mobile application to compete with Rover Inc. and PetBacker Inc. to offer services similar to Airbnb for pets. This was created for our final project simulation in the Introduction to Software Engineering (CSCC01) course at the University of Toronto.',
        image: PawsupImage,
    },
    {
        id: uuidv4(),
        name: 'Medical Supply Chains Algorithm',
        desc: 'Submitted for LSBU Virtual Inter-University Coding Hackathon 2021, where we achieved 3rd place as a finalist. Our task was to come up with an algorithm to balance the vaccine distribution amongst countries for the optimal output.',
        image: MedicalSupplyChainsImage,
    },
];

export default projects;
