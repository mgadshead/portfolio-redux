import React, { useEffect } from 'react';
import './MainContent.scss';
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller';
import { useScrollBoost } from 'react-scrollbooster';
import { useHistory } from 'react-router-dom';

const MainContent = () => {
    const [viewport] = useScrollBoost({
        direction: 'horizontal',
        scrollMode: 'native',
        emulateScroll: true,
        onClick: (state, event) => {
            if (state.isDragging) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }
    });

    const history = useHistory();

    useEffect(() => {
        let item = document.querySelector('.MainContent');

        window.addEventListener('wheel', function (e) {
            if (history.location.pathname === '/') {
                if (e.deltaY > 0) {
                    if (item) item.scrollLeft += 100;
                } else if (e.deltaY < 0) {
                    if (item) item.scrollLeft -= 100;
                }
            }
        });
    }, []);

    return (
        <div className='MainContent' ref={viewport}>
            <HorizontalScroller />
        </div>
    );
};

export default MainContent;
