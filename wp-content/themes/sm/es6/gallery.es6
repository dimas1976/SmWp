    /**
     * Created by Dima on 15.11.2018.
     */

    "use strict";

    let imgContainer;
    let imgContainerWidth;
    let screenwidth;
    export const startSlider = () => {
        initialize();
        getImageContainerWidth();
        getScreenWidth();
    };
    function initialize() {
        imgContainer = document.querySelector('.imgContainer');
        imgContainerWidth = 0;
    };

    function getImageContainerWidth() {
        "use strict";
        let pictures = document.querySelectorAll('.imgContainer .imgContainer__picture');
        for (let i = 0; i < pictures.length; i++) {
            let imgWidth = window.getComputedStyle(pictures[i], null).getPropertyValue('width');
            imgWidth = parseInt(imgWidth);
            imgContainerWidth += imgWidth;
        }
    };

    function getScreenWidth() {
        "use strict";
        let screen = document.querySelector('.gallery__screen');
        screenwidth = parseInt(window.getComputedStyle(screen, null).getPropertyValue('width'));
    };



