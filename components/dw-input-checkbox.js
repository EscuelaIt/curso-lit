import { LitElement, html, css } from 'lit';
import '@dile/dile-checkbox/dile-checkbox';

export class DwInputCheckbox extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            ::slotted(input) {
                display: none;
            }

        `
    ];

    static properties = {
        checked: { type: Boolean },
        name: { type: String },
        disabled: { type: Boolean },
    }

    render() {
        return html`
            <dile-checkbox 
                id="elcheck"
                name="${this.name}" 
                ?disabled=${this.disabled}
                ?checked=${this.checked}
                @click=${this.clickHandler}
            ><slot></slot></dile-checkbox>
        `;
    }

    firstUpdated() {
        this.elcheck = this.shadowRoot.getElementById('elcheck');
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'checkbox');
        this.input.setAttribute('name', this.name);
        this.input.checked = this.checked;
        //this.input.
        this.appendChild(this.input);
    }

    clickHandler() {
        console.log('this.elcheck.checked', this.elcheck.checked);
        this.input.checked = this.elcheck.checked;
    }
}
customElements.define('dw-input-checkbox', DwInputCheckbox);
