var doit;

function changeBackground() {
    clearTimeout(doit);
    doit = setTimeout(generateBackground, 100);
}

function generateBackground() {
    let element = document.getElementsByTagName('main')[0];
    let elementHeight = element.clientHeight;
    let elementWith = element.clientWidth;
    function freshDot() {
        this.obj = document.createElement("img");
        this.obj.src = 'img/icons/background/icon' + Math.floor(Math.random() * (7 - 1 + 1) + 1) + '.svg';
        this.obj.classList.add("background_icon");
        this.obj.style.top = elementHeight * Math.random() + "px";
        this.obj.style.left = elementWith * Math.random() + "px";
        this.size = 2;
        this.obj.style.height = this.size + "rem";
        this.obj.style.width = this.size + "rem";

        element.appendChild(this.obj);
    }

    var dot = [];
    for (var i = 0; i < 15; i++) {
        dot.push(new freshDot());
    }

}

function refreshBackground() {
    let objects = document.querySelectorAll('.background_icon');
    let lenght = document.querySelectorAll('.background_icon').length;
    for (let i = 0; i < lenght; i++) {
        objects[i].remove();
    }

    changeBackground()
}

