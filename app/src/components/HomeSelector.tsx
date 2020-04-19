import React from 'react';
import '../stylesheets/App.css';
import { HomeSelectorProps, SelectorInfo } from '../interfaces/appModels';

function HomeSelector(props: HomeSelectorProps) {
    return formatSelector(props.info);
}

function formatSelector(info: SelectorInfo): JSX.Element {
    if (info.readiness) {
        return (
            <a href={info.link}>
                <div className="HomeSelector">
                    <h2>{info.title}</h2>
                </div>
            </a >
        )
    } else {
        return (
            <a href={info.link}>
                <div className="HomeSelector unavailable-selector" title="coming soon">
                    <h2><s>{info.title}</s></h2>
                </div>
            </a>
        )
    }
}

export default HomeSelector;