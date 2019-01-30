export const showYT = ()=> {
    "use strict";
    const btToYT = document.querySelector('.button__image');
    btToYT.addEventListener('click', function () {
        let iFrame = document.querySelector('.iframe');
        let video = document.querySelector('.video');
        video.setAttribute('style', 'display: none');
        iFrame.setAttribute('style', 'display: block');
    });
};




