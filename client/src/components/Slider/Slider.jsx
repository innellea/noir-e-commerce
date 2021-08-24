import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/2.png';

import img2 from '../../assets/S1.jpg';
import styles from './Slider.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
export const Slider = ({ children }) => {
    return (
        <>
            <AutoplaySlider
                className='aws-btn'
                cssModule={styles}
                play={true}
                organicArrows={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                bullets={false}
            >
                <div data-src={img2} />
                <div data-src={img1} />
            </AutoplaySlider>

            <div className=''>{children}</div>
        </>
    );
};
