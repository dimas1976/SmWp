    "use strict";
    import { showYT } from './presentation.es6';
    import { startSlider } from './gallery.es6';

    let menubar;
    let menulist;
    let mediaSM;//small devices
    let mediaTablet;

    let header;
    let headerYPosition;

    let menuItems;

    let tv;
    let presentation;
    let tvScreen;
    let tvButton;
    let buttonTitle;

    let aBg;
    let aBgYPosition;
    let aCloud;
    let aAvatar;
    let aCloudTxt;

    let nBg;
    let nBgYPosition;
    let nCloud;
    let nAvatar;
    let nCloudTxt;

    let vBg;
    let vBgYPosition;
    let vCloud;
    let vAvatar;
    let vCloudTxt;

    let newsBg;
    let newsBgYPosition;
    let newsHeadline;
    let underline;
    let news;
    let linkToArchive;

    let galleryBg;
    let galleryBgYPosition;
    let galleryHeadline;
    let galleryHeadlineUnderline;

    let contactBg;
    let contactBgYPosition;
    let contactHeadline;
    let contactHeadlineUnderline;
    let form;

    let footer;
    let footerYPosition;
    let footerHeadline;
    let footerColumn1;
    let footerColumn2;

    export const startAnima = () => {
        init();
        animation(window.pageYOffset);
    };
    const init = () => {
        menubar = document.querySelector('.navigation__menuItemsContainer');
        menulist = document.querySelector('.menu-list');
        header = document.querySelector('.header__container');
        headerYPosition = header.offsetTop;
        menuItems = document.querySelectorAll('.menu-item-image');
        presentation = document.querySelector('#presentation');
        tv = document.querySelector('.presentation__items');
        tvScreen = document.querySelector('video');
        tvButton = document.querySelector('.button__image');
        buttonTitle = document.querySelector('#presentation .button__title');

        aBg = document.querySelector('.aboutUs__container:first-child');
        aBgYPosition = aBg.offsetTop;
        aCloud = document.querySelector('.cloud--anna');
        aAvatar = document.querySelector('.cloud--anna + .avatar');
        aCloudTxt = document.querySelector('.cloud__text--anna');

        nBg = document.querySelector('.aboutUs__container:nth-child(2)');
        nBgYPosition = nBg.offsetTop;
        nCloud = document.querySelector('.cloud--nadja');
        nAvatar = document.querySelector('.cloud--nadja + .avatar');
        nCloudTxt = document.querySelector('.cloud__text--nadja');

        vBg = document.querySelector('.aboutUs__container:nth-child(3)');
        vBgYPosition = vBg.offsetTop;
        vCloud = document.querySelector('.cloud--vika');
        vAvatar = document.querySelector('.cloud--vika + .avatar');
        vCloudTxt = document.querySelector('.cloud__text--vika');

        newsBg = document.querySelector('.news__container');
        newsBgYPosition = newsBg.offsetTop;
        newsHeadline = document.querySelector('.news__container .headline--big');
        underline = document.querySelector('.news__container .underline');
        news = document.querySelector('.messagesContainer');
        linkToArchive = document.querySelector('.archiveLink');

        galleryBg = document.querySelector('.gallery__container');
        galleryBgYPosition = galleryBg.offsetTop;
        galleryHeadline = document.querySelector('.gallery__container .headline--big');
        galleryHeadlineUnderline = document.querySelector('.gallery__container .underline');

        contactBg = document.querySelector('.contact__container');
        contactBgYPosition = contactBg.offsetTop;
        contactHeadline = document.querySelector('.contact__container .headline--big');
        contactHeadlineUnderline = document.querySelector('.contact__container .underline');
        form = document.querySelector('.contact__form');

        footer = document.querySelector('.footer-container');
        footerYPosition = footer.offsetTop;
        footerHeadline = document.querySelector('.footer-container .headline--small');
        footerColumn1 = document.querySelector('.friday');
        footerColumn2 = document.querySelector('.saturday');

        mediaSM = window.matchMedia('(max-width: 768px)');

        window.addEventListener('scroll', scrollHandler);

        let links = document.querySelectorAll('.navigation__menuItem');
        for (let x = 0; x < links.length; x++) {
            links[x].addEventListener('click', clickHandler);
        }
    };

    const scrollHandler = () => {
        let scrollTop = window.pageYOffset;
        scrollTop > 0 ? menubar.classList.add('stick-navi') : menubar.classList.remove('stick-navi');
        animation(scrollTop);
    }

    const clickHandler = (event) => {
        event.preventDefault();
        let target = event.currentTarget.dataset.scroll;
        window.location.href = '#' + target;
        if (mediaSM.matches) {
            menulist.style.left = '-50%';
        }
    };

    const animation = (windowTopPosition) => {
        if (windowTopPosition >= headerYPosition) {
            header.style.animation = 'fadeHeader .5s linear forwards';
            menulist.style.display = 'block';
            runInMenuItems();
            animatePresentation();
        }
        if ((windowTopPosition + window.innerHeight) >= aBgYPosition) {
            animateASection();
        }
        if ((windowTopPosition + window.innerHeight) >= nBgYPosition) {
            animateNSection();
        }
        if ((windowTopPosition + window.innerHeight) >= vBgYPosition) {
            animateVSection();
        }
        if ((windowTopPosition + window.innerHeight) >= newsBgYPosition) {
            animateNewsSection();
        }
        if ((windowTopPosition + window.innerHeight) >= galleryBgYPosition) {
            animateGallery();
        }
        if ((windowTopPosition + window.innerHeight) >= contactBgYPosition) {
            animateForm();
        }
        if ((windowTopPosition + window.innerHeight) >= footerYPosition) {
            animateFooter();
        }

    };

    const runInMenuItems = () => {

        for (let menuItem of menuItems) {
            menuItem.style.animation = 'runInMenu .5s linear forwards';
        }
    }
    const animatePresentation = () => {
        presentation.style.animation = 'showPresentationBg .5s linear forwards';
        tv.style.animation = 'fadeInTV .5s linear .5s forwards';
        tvScreen.style.animation = 'fadeInScreen .5s linear 1s forwards'
        tvButton.style.animation = 'animateTvBt .5s linear 1.5s forwards';
        buttonTitle.style.animation = 'animateBtTitle .5s linear 2s forwards';
        showYT();
    }
    const animateASection = () => {
        aBg.style.animation = 'animateAboutBg .5s linear forwards';
        aAvatar.style.animation = 'animateAvatar .5s cubic-bezier(0.440, 0.010, 0.235, 1.005) .5s forwards';
        aCloud.style.animation = 'animateCloud .5s linear 1.5s forwards';
        aCloudTxt.style.animation = 'fadeInCldTxt .5s linear 2s forwards';
    }
    const animateNSection = () => {
        nBg.style.animation = 'animateAboutBg .5s linear forwards';
        nAvatar.style.animation = 'animateAvatar .5s cubic-bezier(0.440, 0.010, 0.235, 1.005) 1s forwards';
        nCloud.style.animation = 'animateCloud .5s linear 1.5s forwards';
        nCloudTxt.style.animation = 'fadeInCldTxt .5s linear 2s forwards';
    }
    const animateVSection = () => {
        vBg.style.animation = 'animateAboutBg .5s linear forwards';
        vAvatar.style.animation = 'animateAvatar .5s cubic-bezier(0.440, 0.010, 0.235, 1.005) 1s forwards';
        vCloud.style.animation = 'animateCloud .5s linear 1.5s forwards';
        vCloudTxt.style.animation = 'fadeInCldTxt .5s linear 2s forwards';
    }
    const animateNewsSection = () => {
        newsBg.style.animation = 'showPresentationBg .5s linear forwards';
        newsHeadline.style.animation = "animateHeadline .5s linear .5s forwards";
        underline.style.animation = "animateUnderline 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) 1s forwards";
        news.style.animation = 'animateMessages .5s linear 1.5s forwards';
        linkToArchive.style.animation = 'animateArchiveLink 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) 1.5s forwards';
    }
    const animateGallery = () => {
        galleryBg.style.animation = 'showPresentationBg .5s linear forwards';
        galleryHeadline.style.animation = "animateHeadline .5s linear .5s forwards";
        galleryHeadlineUnderline.style.animation = "animateUnderline 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) 1s forwards";
        startSlider();
    }
    const animateForm = () => {
        contactBg.style.animation = 'showPresentationBg .5s linear forwards';
        contactHeadline.style.animation = "animateHeadline .5s linear .5s forwards";
        contactHeadlineUnderline.style.animation = "animateUnderline 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) 1s forwards";
        form.style.animation = 'animateForm .5s linear 1.5s forwards';
    }
    const animateFooter = () => {
        footerHeadline.style.animation = 'animateFooter .5s cubic-bezier(0.680, -0.550, 0.265, 1.550) forwards';
        footerColumn1.style.animation = 'animateFooter .5s cubic-bezier(0.680, -0.550, 0.265, 1.550) .5s forwards';
        footerColumn2.style.animation = 'animateFooter .5s cubic-bezier(0.680, -0.550, 0.265, 1.550) .5s forwards';

    }

