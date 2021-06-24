import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CaseStudy from '../CaseStudy/CaseStudy';
import MainContent from '../MainContent/MainContent';
import { useSelector, useDispatch } from 'react-redux';
import wordpress from '../../api/wordpress';

const Router = () => {
    const dispatch = useDispatch();
    const caseStudies = useSelector(state => state.caseStudies);

    useEffect(() => {
        const getCaseStudies = async () => {
            const { data } = await wordpress.get('wp-json/acf/v3/posts');
            dispatch({ type: 'getCaseStudies', data });
        };
        if (!caseStudies.length) {
            getCaseStudies();
        }
    }, []);

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
