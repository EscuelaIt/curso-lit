import { LitElement, html, css } from 'lit';
import { WiredButton } from 'wired-elements/lib/wired-button.js';
import { WiredCard } from 'wired-elements/lib/wired-card.js';
//import { WiredInput } from 'wired-elements/lib/wired-input.js';
import '@dile/dile-input/dile-input';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            h2 {
                color: red;
            }
            .parrafo {
                color: blue;
                font-size: 1.5em;
            }
            wired-input {
                width: 50px;
                font-size: 1em;
                padding: 0.5em;
            }
            wired-button {
                background-color: #8cf;
            }
            wired-button.decrement {
                background-color: #fcc;
            }
            wired-card {
                margin: 1em;
                padding: 1em;
            }
            @media(min-width: 500px) {
                .parrafo {
                    font-size: 3em;
                }
            }

        `
    ];

    static properties = {
        counter: { 
            type: Number,
            reflect: true,
            hasChanged: (newValue, oldValue) => {
                return newValue % 5 === 0;
            }
        },
        quantity: { type: Number, },
    }

    constructor() {
        super();
        this.counter = 10;
        this.quantity = 10;
    }

    updated() {
        console.log('han cambiado los valores');
    }

    render() {
        return html`
            <wired-card elevation="3">
                <slot></slot>
                <p class="parrafo">${this.counter}</p>
                <p>
                    <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad"></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="10" 
                        min="1" 
                        max="20" 
                        @change=${this.doChangeQuantity}
                    ></wired-slider>
                </p>
                <wired-button @click=${this.increment}>Incrementar</wired-button>
                <wired-button @click=${this.decrement} class="decrement">Decrementar</wired-button>
            </wired-card>
        `;
    }

    // get quantity() {
    //     return this.shadowRoot.getElementById('quantity').value;
    // }

    doChangeQuantity(e) {
        this.quantity = e.detail.value;
        //console.log(this.quantity);
    }

    increment() {
        //let quantity = this.shadowRoot.getElementById('quantity').value;
        this.counter += parseInt(this.quantity);
    }

    decrement() {
        this.counter -= parseInt(this.quantity);
    }
}
customElements.define('eit-counter', EitCounter);
