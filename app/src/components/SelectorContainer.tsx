import React from 'react';

import '../stylesheets/App.css';

import { SelectorContainerProps, SelectorInfo } from '../interfaces/appModels';
import HomeSelector from './HomeSelector';

function SelectorContainer(props: SelectorContainerProps) {
    return (
        <div>
            {props.selectors?.map((selector: SelectorInfo) => <HomeSelector info={selector} />)}
        </div>
    );
}

export default SelectorContainer;