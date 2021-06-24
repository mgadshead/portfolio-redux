import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CaseStudy.scss';
import HomeIcon from '../HomeIcon/HomeIcon';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import smoothscroll from 'smoothscroll-polyfill';
import { useSwipeable } from 'react-swipeable';
import LazyLoad from 'vanilla-lazyload';
import { useSelector, useDispatch } from 'react-redux';

const CaseStudy = props => {
    const content = useRef(null);
    const history = useHistory();
    const [isTop, setIsTop] = useState(true);
    const homeButton = useRef(null);
    const scrollDown = useRef(null);
    const dispatch = useDispatch();
    const startOnCaseStudy = useSelector(state => state.startOnCaseStudy);
    const transitionTime = useSelector(state => state.transitionTime);
    const caseStudies = useSelector(state => state.caseStudies);

    smoothscroll.polyfill();

    const startOpen = i => {
        if (startOnCaseStudy) {
            dispatch({ type: 'startOnCaseStudy', i });
        }
    };

    useEffect(() => {
        // Listen for a change in route and fire the close animation whenever it happens
        // This means it'll work on back/forward
        return history.listen(location => {
            // I want the close animation to run when we go to the home page
            if (location.pathname === '/') {
                initCloseCaseStudy();
            }
        });
    }, [history]);

    useEffect(() => {
        let body = document.querySelector('html');

        const scrollFunction = () => {
            if (body.scrollTop === 0 && isTop === false) {
                closeCaseStudy();
            }
            if (body.scrollTop === 0 && isTop === true) {
                // scrollDown.current.classList.add('show-scroll-down');
            }
            if (body.scrollTop > 0) {
                let cardParallaxPosition = body.scrollTop * -0.32;
                dispatch({ type: 'setCardParallax', position: cardParallaxPosition });
                scrollDown.current.classList.remove('show-scroll-down');
            } else {
                let position = 0;
                dispatch({ type: 'setCardParallax', position: 0 });
            }
        };

        document.addEventListener('scroll', scrollFunction);

        return () => {
            document.removeEventListener('scroll', scrollFunction);
        };
    });

    useEffect(() => {
        var lazyLoadInstance = new LazyLoad();

        setTimeout(() => {
            if (homeButton.current !== null) {
                homeButton.current.classList.add('show-home-button');
            }
        }, transitionTime);
        startOpen(props.id);
        window.scrollTo(0, 0);
        setTimeout(() => {
            if (scrollDown.current !== null) {
                scrollDown.current.classList.add('show-scroll-down');
            }
        }, transitionTime);
    }, []);

    const initCloseCaseStudy = () => {
        let body = document.querySelector('html');
        dispatch({ type: 'setPreviousPage', previousPage: '/' });
        if (homeButton.current === null) {
            closeCaseStudy();
        } else {
            if (body.scrollTop === 0) {
                closeCaseStudy();
            } else {
                setIsTop(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const closeCaseStudy = () => {
        dispatch({ type: 'setTransition', bool: true });
        let currentCardContainer = document.querySelector('.WorkCard.active');
        // Since this now fires on click as well as on page change we have to check if it's already run once
        // I should probably do something nicer later
        if (currentCardContainer !== null) {
            dispatch({ type: 'setCardParallax', position: 0 });
            let currentCardPosition = currentCardContainer.getBoundingClientRect();
            dispatch({ type: 'animateCardClosed', currentCardPosition });
            setIsTop(true);
            // Same deal down here, if it's already run once these return as null
            if (homeButton.current !== null) {
                homeButton.current.classList.remove('show-home-button');
            }
            if (scrollDown.current !== null) {
                scrollDown.current.classList.remove('show-scroll-down');
            }
            setTimeout(() => {
                dispatch({ type: 'finishCloseAnimation' });
                history.push('');
            }, transitionTime);
        }
    };

    const scrollDownEvent = () => {
        let scrollPosition = content.current.offsetTop;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };

    const previous = () => {
        let index = caseStudies.findIndex(function (obj) {
            return obj.id == props.caseStudyPage.id;
        });
        if (index - 1 > -1) {
            // Resolves to false without the greater than statement
            let previousPage = caseStudies[index].acf.link;
            dispatch({ type: 'setPreviousPage', previousPage });
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(caseStudies[index - 1].acf.link);
            }, 16);
        }
    };

    const next = () => {
        let index = caseStudies.findIndex(function (obj) {
            return obj.id == props.caseStudyPage.id;
        });
        if (caseStudies[index + 1]) {
            let previousPage = caseStudies[index].acf.link;
            dispatch({ type: 'setPreviousPage', previousPage });
            // Dammit another setTimeout
            setTimeout(() => {
                history.push(caseStudies[index + 1].acf.link);
            }, 16);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => previous()
    });

    const copy = {
        __html: props.caseStudyPage.acf.content
    };

    const tagsArray = Object.values(props.caseStudyPage.acf.tags);

    const tags = tagsArray.map((tag, i) => {
        return <li key={i}>{Object.values(tag)}</li>;
    });

    const images = props.caseStudyPage.acf.images.map((image, i) => {
        return (
            <img
                key={i}
                className='lazy'
                src={image.image.sizes.mobile}
                data-srcset={
                    image.image.sizes.tablet + ' 800w, ' + image.image.sizes.desktop + ' 1200w'
                }
                alt={image.image.alt}
            />
        );
    });

    return (
        <div className='CaseStudy' {...handlers}>
            <div
                className='home-button'
                id='home-button'
                role='button'
                ref={homeButton}
                onClick={() => {
                    initCloseCaseStudy();
                }}
            >
                <HomeIcon />
            </div>
            <div
                className='scroll-down'
                style={{
                    color: props.caseStudyPage.acf.scroll_down_color === 'Dark' ? '#333' : '#fff'
                }}
                ref={scrollDown}
                role='button'
            >
                <div
                    className='scroll-button'
                    onClick={() => {
                        scrollDownEvent();
                    }}
                >
                    Scroll Down
                    <ChevronIcon />
                </div>
            </div>
            <div className='content' ref={content}>
                <div className='wrapper'>
                    {props.caseStudyPage.acf.mockup && (
                        <img
                            className='lazy'
                            src={props.caseStudyPage.acf.mockup.sizes.mobile}
                            data-srcset={
                                props.caseStudyPage.acf.mockup.sizes.tablet +
                                ' 800w, ' +
                                props.caseStudyPage.acf.mockup.sizes.desktop +
                                ' 1200w'
                            }
                            alt={props.caseStudyPage.acf.alt}
                        />
                    )}
                    <div className='copy'>
                        <h1>{props.caseStudyPage.acf.title}</h1>
                        <div dangerouslySetInnerHTML={copy}></div>
                        {props.caseStudyPage.acf.external_pretty_link && (
                            <a href={props.caseStudyPage.acf.external_link} target='_blank'>
                                {props.caseStudyPage.acf.external_pretty_link}
                            </a>
                        )}
                        {tags.length !== 0 && (
                            <div className='tags'>
                                <h2>Tags:</h2>
                                <ul>{tags}</ul>
                            </div>
                        )}
                    </div>
                    {props.caseStudyPage.acf.images && <div className='images'>{images}</div>}
                    <div className='bottom-links'>
                        {caseStudies[props.id - 1] && (
                            <span className='previous' onClick={() => previous()}>
                                <ChevronIcon />
                            </span>
                        )}
                        {!caseStudies[props.id - 1] && (
                            <span className='no-link previous'>
                                <ChevronIcon />
                            </span>
                        )}
                        <span
                            id='home-link'
                            onClick={() => {
                                initCloseCaseStudy();
                            }}
                            role='button'
                        >
                            Home
                        </span>
                        {caseStudies[props.id + 1] && (
                            <span className='next' onClick={() => next()}>
                                <ChevronIcon />
                            </span>
                        )}
                        {!caseStudies[props.id + 1] && (
                            <span className='no-link next'>
                                <ChevronIcon />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
