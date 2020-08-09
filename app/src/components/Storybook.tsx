import React from 'react';
import Narration from './Narration';
import '../stylesheets/Storybook.css';
import { NarrationInfo } from '../interfaces/storybookModels';

let openingScene: NarrationInfo = {
    sceneIntro: "Your time machine worked...",
    sceneContent: "The year is 2109. You've found yourself in a hyper-modern, fast-paced, yet eerily quiet metropolis. There's not a chirping bird or whirring engine to speak of."
};

function Storybook() {
    return(
        <Narration info={openingScene}></Narration>
    );
}

export default Storybook;