import { createStore } from 'redux';

const portfolioReducer = (
    state = {
        index: null,
        cardPosition: { x: 0, y: 0 },
        isActive: false,
        transition: false,
        zIndex: false,
        cardParallax: null,
        startOnCaseStudy: true,
        previousPage: '/',
        transitionTime: 240,
        caseStudies: []
    },
    action
) => {
    if (action.type === 'startOnCaseStudy') {
        return {
            ...state,
            index: action.i,
            cardPosition: { x: 0, y: 0 },
            isActive: true,
            zIndex: true
        };
    }

    if (action.type === 'getCaseStudies') {
        return {
            ...state,
            caseStudies: action.data
        };
    }

    if (action.type === 'setFixed') {
        return {
            ...state,
            cardPosition: { x: action.currentCardPosition.x, y: action.currentCardPosition.y },
            startOnCaseStudy: false,
            zIndex: true,
            index: action.i
        };
    }

    if (action.type === 'setTransition') {
        return {
            ...state,
            transition: action.bool
        };
    }

    if (action.type === 'animateCardOpen') {
        return {
            ...state,
            cardPosition: { x: 0, y: 0 },
            isActive: true
        };
    }

    if (action.type === 'setCardParallax') {
        return {
            ...state,
            cardParallax: action.position
        };
    }

    if (action.type === 'setPreviousPage') {
        return {
            ...state,
            previousPage: action.previousPage
        };
    }

    if (action.type === 'animateCardClosed') {
        return {
            ...state,
            cardPosition: action.currentCardPosition,
            isActive: false
        };
    }

    if (action.type === 'finishCloseAnimation') {
        return {
            ...state,
            index: null,
            zIndex: false
        };
    }

    return state;
};

const store = createStore(portfolioReducer);

export default store;
