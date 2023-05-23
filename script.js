function toggleDetails1() {
    var x = document.getElementById("details1");
    var btn = document.getElementById("showmore1");
    if (x.style.display == "none") {
        anime({
            targets: '#details1',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}

function toggleDetails2() {
    var x = document.getElementById("details2");
    var btn = document.getElementById("showmore2");
    if (x.style.display == "none") {
        anime({
            targets: '#details2',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}

function toggleDetails3() {
    var x = document.getElementById("details3");
    var btn = document.getElementById("showmore3");
    if (x.style.display == "none") {
        anime({
            targets: '#details3',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}

function toggleDetails4() {
    var x = document.getElementById("details4");
    var btn = document.getElementById("showmore4");
    if (x.style.display == "none") {
        anime({
            targets: '#details4',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}

function toggleDetails5() {
    var x = document.getElementById("details5");
    var btn = document.getElementById("showmore5");
    if (x.style.display == "none") {
        anime({
            targets: '#details5',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}
function toggleDesc1() {
    var x = document.getElementById("desc1");
    var btn = document.getElementById("showdesc1");
    if (x.style.display == "none") {
        anime({
            targets: '#desc1',
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeInOutExpo'
        });
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "More Details";
    }
}

anime({
    targets: '#quartercircle',
    translateY: [-300, 0],
    translateX: [-200, 0],
    delay: 200,
    duration: 800,
    easing: 'easeInOutExpo'
});

anime({
    targets:'#mainlogo',
    translateX: [-100, 0],
    opacity: [0, 1],
    delay: 700,
    duration: 700,
    easing: 'easeInOutExpo'
})

anime({
    targets: '#typingcursor',
    translateX: [0, 440],
    delay: 450,
    duration: 200,
    easing: 'easeInOutExpo'
});

anime({
    targets: '#typingcursor',
    opacity: [1, 0, 1],
    delay: 300,
    duration: 1100,
    loop: true
});

anime({
    targets: '.headertext',
    opacity: [0, 1],
    delay: 650,
    duration: 1000
});

anime({
    targets: '.subtext',
    opacity: [0, 1],
    translateX: [-100, 0],
    delay: 1000,
    duration: 1000,
    easing: 'easeInOutExpo'
})

anime({
    targets: '#homebtns',
    translateY: [40, 0],
    opacity: [0, 1],
    delay: 1500,
    duration: 700,
    easing: 'easeInOutExpo'
})

anime({
    targets: '#abouttext',
    translateX: [70, 0],
    opacity: [0, 1],
    delay: 200,
    duration: 800,
    easing: 'easeInOutExpo'
});

anime({
    targets: '#aboutimage',
    translateX: [-200, 0],
    opacity: [0, 1],
    delay: 200,
    duration: 800,
    easing: 'easeInOutExpo'
});