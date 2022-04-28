import { Component } from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }
    init() {
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', btnClickHandler.bind(this))
    }
}

function btnClickHandler() {
    console.log(this.$el);
    
    this.hide()
}