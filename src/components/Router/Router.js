import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CaseStudy from '../CaseStudy/CaseStudy';
import MainContent from '../MainContent/MainContent';
import wordpress from '../../api/wordpress';
import { useSelector, useDispatch } from 'react-redux';

const Router = () => {
    const dispatch = useDispatch();
    const caseStudies = useSelector(state => state.caseStudies);
    const index = useSelector(state => state.index);
    const cardPosition = useSelector(state => state.cardPosition);
    const isActive = useSelector(state => state.isActive);
    const zIndex = useSelector(state => state.zIndex);

    // useEffect(() => {
    //     console.log('useEffect');
    //     const getCaseStudies = async () => {
    //         console.log('get studies');
    //         const { data } = await wordpress.get('wp-json/acf/v3/posts');
    //         dispatch({ type: 'getCaseStudies', data });
    //     };
    //     if (!caseStudies.length) {
    //         getCaseStudies();
    //     }
    // }, []);

    const caseStudyPages = caseStudies.map((caseStudyPage, i) => {
        return (
            <Route path={'/' + caseStudyPage.acf.link} key={i}>
                <CaseStudy caseStudyPage={caseStudyPage} id={i} />
            </Route>
        );
    });

    return (
        <BrowserRouter>
            <MainContent></MainContent>
            <Switch>{caseStudyPages}</Switch>
        </BrowserRouter>
    );
};

export default Router;
