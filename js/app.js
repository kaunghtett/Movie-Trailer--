import Controller from '/js/controller/controller.js';

const controller = new Controller();
controller.init();

document.querySelector('#rating').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});