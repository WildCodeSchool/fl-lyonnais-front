import React, { useState } from 'react';
import './ButtonScrollTop.scss';


const ButtonScrollTop = () => {

const [showScroll, setShowScroll] = useState(false)

const checkScrollTop = () => {
if (!showScroll && window.pageYOffset > 40) {
setShowScroll(true)
} else if (showScroll && window.pageYOffset <= 40) {
setShowScroll(false)
}
};

const scrollTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', checkScrollTop)

return (
<div className='scrollTop'>
<i class="fa fa-arrow-circle-up fa-3x" aria-hidden="true" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}></i>
</div>
);
}

export default ButtonScrollTop;