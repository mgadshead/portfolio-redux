import React from 'react';
import './HorizontalScroller.scss';
import WorkCard from '../WorkCard/WorkCard';
import { useSelector } from 'react-redux';

const HorizontalScroller = () => {
    const caseStudies = useSelector(state => state.caseStudies);

    const caseStudiesList = caseStudies.map((caseStudy, i) => {
        return (
            <WorkCard
                backgroundColor={caseStudy.acf.background_color}
                logo={caseStudy.acf.logo}
                link={caseStudy.acf.link}
                i={i}
                key={i}
            />
        );
    });

    return <div className='HorizontalScroller'>{caseStudiesList}</div>;
};

export default HorizontalScroller;
