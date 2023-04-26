function toggleDetails1() {
    var x = document.getElementById("details1");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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
    translateY: [50, 0],
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