var shown = true;

function bracketTransform() {
    var bracketsanim = anime({
        targets: '.brackets-icon',
        d: [

            { value: 'M1.3 21.5L17.7 5M1.3 28.5L17.7 45M39.9 25H11.1M49 28.3L32.5 44.8M49 20.3L32.5 3.8' }
        ],
        stroke: '#fff',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}

function bracketReturn() {
    var bracketsanim2 = anime({
        targets: '.brackets-icon',
        d: [

            { value: 'M1.3 25.5L17.7 9M1.3 24.5L17.7 41M29 11l-7 28M49 24.3L32.5 40.8M49 25.3L32.5 8.8' }
        ],
        stroke: '#7E7F85',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}

function mcastTransform() {
    var mcastblue = anime({
        targets: '.mcast-blue',
        translateY: -5,
        fill: '#3f7cb8',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
    var mcastred = anime({
        targets: '.mcast-red',
        translateY: 0,
        fill: '#c72a4c',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
    var mcastyellow = anime({
        targets: '.mcast-yellow',
        translateY: 5,
        fill: '#fabc14',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}

function mcastReturn() {
    var mcastblue = anime({
        targets: '.mcast-blue',
        translateY: 0,
        fill: '#555',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
    var mcastred = anime({
        targets: '.mcast-red',
        translateY: 0,
        fill: '#AAA',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
    var mcastyellow = anime({
        targets: '.mcast-yellow',
        translateY: 0,
        fill: '#CCC',
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}
function benTransform() {
    var iconanim = anime({
        targets: '.ben-codes-icon',
        scale: 1.2,
        fill: '#f00',
        duration: 200,
        easing: 'linear',
        loop: 1,
    })
}

function benReturn() {
    var iconanim2 = anime({
        targets: '.ben-codes-icon',
        scale: 1,
        fill: '#7E7F85',
        duration: 200,
        easing: 'linear',
        loop: 1,
    })
}


/*function mobileNav() {
    if (shown == true) {
        document.getElementById("js-nav-links").style.display = 'block';
        document.getElementById("js-vr-logo").style.display = 'none';
        shown = false;
    }
    else if (shown == false) {
        document.getElementById("js-nav-links").style.display = 'none';
        document.getElementById("js-vr-logo").style.display = 'block';
        shown = true;
    }

}*/