import React, { useEffect } from 'react';
import './WorkCard.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const WorkCard = props => {
    const dispatch = useDispatch();
    const index = useSelector(state => state.index);
    const isActive = useSelector(state => state.isActive);
    const cardPosition = useSelector(state => state.cardPosition);
    const transition = useSelector(state => state.transition);
    const transitionTime = useSelector(state => state.transitionTime);
    const zIndex = useSelector(state => state.zIndex);
    const cardParallax = useSelector(state => state.cardParallax);
    const history = useHistory();

    useEffect(() => {
        // Stop the transition taking place if you're going from case study to case study
        if (props.previousPage === '/') {
            var transition = true;
        } else {
            var transition = false;
        }
        // Listen for a change in route and fire the open animation whenever it happens
        // This means it'll work on back/forward
        return history.listen(location => {
            // I don't want the open animation to run when we go to the home page
            if (location.pathname !== '/') {
                openCaseStudy(props.i, transition);
            }
        });
    });

    const openCaseStudy = (i, transition) => {
        // Get the correct card by checking if the href matches the current location
        let currentCard = document.querySelector("a[href='" + history.location.pathname + "']");
        // Grab the index from the id
        let currentCardId = currentCard.id.replace(/^\D+/g, '');
        if (currentCardId == i) {
            let currentCardContainer = currentCard.parentElement;
            // Get the current position of the card container
            let currentCardPosition = currentCardContainer.getBoundingClientRect();
            // Set the container to position fixed at it's current location to allow for animation
            dispatch({ type: 'setFixed', currentCardPosition, i });
            // Animate to full screen
            // Stop the transition taking place if you're going from case study to case study
            if (transition === false) {
                console.log('false');
                dispatch({ type: 'setTransition', bool: true });
                // So evidently promise chains don't happen in a way that guarantees a repaint between them
                // I also can't figure out how to chain requestAnimationFrame functions yet
                // So there you go, a setTimeout hack, it seems to work I guess, not pretty though
                setTimeout(() => {
                    dispatch({ type: 'animateCardOpen' });
                }, 16);
            } else {
                console.log('true');
                dispatch({ type: 'setTransition', bool: false });
                dispatch({ type: 'animateCardOpen' });
            }
        }
    };

    return (
        <div className={`WorkCard${props.i === index && isActive ? ' active' : ''}`}>
            <Link
                to={props.link}
                className='expand-container'
                id={'card-' + props.i}
                style={{
                    background: props.backgroundColor,
                    top: props.i === index ? cardPosition.y + 'px' : 'auto',
                    left: props.i === index ? cardPosition.x + 'px' : 'auto',
                    position: props.i === index ? 'fixed' : 'absolute',
                    transition: transition
                        ? 'all ' + transitionTime + 'ms'
                        : 'opacity ' + transitionTime + 'ms',
                    zIndex: props.i === index && zIndex ? '1' : 'auto'
                }}
            >
                <img
                    src={props.logo}
                    style={{
                        transform: 'translateY(' + cardParallax + 'px)'
                    }}
                />
            </Link>
        </div>
    );
};

export default WorkCard;
