'use strict';

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop_up');
        this.popUpText = document.querySelector('.result');
        this.popUpRefresh = document.querySelector('.refresh');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            hide();
        })
    }

    setClickListner(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop_up--hide');
    }

    hide() {
        this.popUp.classList.add('pop_up--hide');
    }
}