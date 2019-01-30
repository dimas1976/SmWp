import { startNavi } from './mobile_navi.es6';

let bar;

export const init = ()=> {
    "use strict";
    let req = new XMLHttpRequest();
    req.open('GET','https://static.schkola-mama.de/');
    req.withCredentials = true;
    req.send();
    req.addEventListener('progress', progressHandler);
    req.addEventListener('load', loadHandler);
    req.addEventListener('error', errorHandler);
    req.addEventListener('abort', abortHandler);

    bar = document.querySelector('.preloader__progress');

}

const progressHandler = (event)=> {
    "use strict";
    if(event.lengthComputable) {
        let percentComplete = (event.loaded / event.total) * 100;
        bar.value = percentComplete;
    } else {
        console.log('Volumen kann nicht ermittelt werden');
    }
}
const  loadHandler = ()=> {
    "use strict";
    let preloader = document.querySelector('#preloader');
    preloader.addEventListener('transitionend', transitionHandler);
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s .5s';

}
const errorHandler = ()=> {
    "use strict";
    console.log('error');
}
const abortHandler = ()=> {
    "use strict";
    console.log('abort');
}

const transitionHandler = (event)=>{
    "use strict";
    event.currentTarget.style.display = "none";
    let body = document.querySelector('body');
    body.style.overflow = 'visible';
    startNavi();
}
