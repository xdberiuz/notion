export class Slider {
    constructor() {
        this.btnPrev = document.querySelector('.wrapper_button-prev');
        this.btnNext = document.querySelector('.wrapper_button-next');
        this.line = document.querySelector('.wrapper_sliders');
        this.opacity = document.querySelector('.wrapper_opacity');
        this.step = 0;
        this.clickEvents();
    }

    moveNext() {
        this.step += 840;
        if (this.step > 1680) {
            this.step = 1680;
        }
        if (this.step >= 840) {
            this.btnPrev.classList.add('active');
        }
        if (this.step == 1680) {
            this.btnNext.classList.remove('active');
            this.opacity.style.display = 'none';
        }
        this.line.style.transform = "translateX(-" + this.step + "px)";
        console.log(this.step);

    }

    movePrev() {
        this.step -= 840;
        this.opacity.style.display = 'block';
        if (this.step < 0) {
            this.step = 0;
        }
        this.line.style.transform = "translateX(-" + this.step + "px)";
        this.btnNext.classList.add('active');
        if (this.step == 0) {
            this.btnPrev.classList.remove('active');

        }
        console.log(this.step);
    }

    clickEvents() {
        this.btnNext.addEventListener('click', this.moveNext.bind(this));
        this.btnPrev.addEventListener('click', this.movePrev.bind(this));
    }

}