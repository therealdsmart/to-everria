import React from 'react';
import { NarrationProps } from '../interfaces/storybookModels';
import '../stylesheets/App.css';

function Narration(props: NarrationProps) {
    return (
    <div>
        <div className="large-narration-text">{props.info.sceneIntro}</div>
        <div className="narration-content">{props.info.sceneContent}</div>
    </div>
    );
}

export default Narration;