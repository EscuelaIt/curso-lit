import {LitElement, html, css} from 'lit';

class DwCounterShow5Lifecycle extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        .count {
            display: inline-block;
            font-size: 2rem;
            border-radius: 1rem;
            padding: 0.7rem 1rem;
            background-color: #236bf0;
            color: #fff;
            font-weight: bold;
        }
    `;

    static properties = {
        counter: { 
            type: Number,
            // hasChanged(newVal, oldVal) {
            //     console.log(`Ha cambiado la propiedad "counter" valor antiguo ${oldVal}, nuevo ${newVal}`);
            //     return newVal % 5 == 0;
            // },
        },
    }

    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <div class="count">${this.counter}</div>
            <button @click="${this.add}">+1</button>
            <button @click="${this.subtract}">-1</button>

            <p>
                <button @click=${this.doPerformUpdate}>Perform Update</button>
            </p>
        `;
    }

    add() {
        this.counter++;
    }

    subtract() {
        this.counter--;
    }

    doPerformUpdate() {
        console.log('perforUpdate', this.counter);
        this.counter = 5;
        this.performUpdate();
    }

    shouldUpdate(changedProperties) {
        console.log('shouldUpdate', changedProperties);
        if(changedProperties.has('counter') && this.counter % 2 == 0) {
            return true;
        }
        return false;
    }

    willUpdate(changedProperties) {
        console.log('willUpdate', changedProperties);
        this.counter *= 2;
    }
}

customElements.define('dw-counter-show5-lifecycle', DwCounterShow5Lifecycle);
