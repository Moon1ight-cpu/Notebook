import { Component } from "../core/component";
import { Form } from "../core/form";

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, {
            title: [],
            fulltext: []
        })
    }
}

function submitHandler(evt) {
    evt.preventDefault()

    const formData = {
        type: this.$el.type.value,
        ...this.form.value()
    }
    console.log(formData);

}