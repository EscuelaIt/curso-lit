import { LitElement, html, css } from 'lit';

export class EitSwitch extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            section {
                width: 64px;
                height: 20px;
                border-radius: 10px;
                background-color: #ccc;
                display: flex;
                align-items: center;
                justify-content: flex-start;  
            }
            span {
                width: 32px;
                height: 32px;
                left: 0px;
                position: relative;
                border-radius: 50%;
                background-color: #f66;
                transition: all 0.2s linear;
            }
            :host([checked]) span {
                left: 32px;
                background-color: #69f;
            }
        `
    ];

    static properties = {
        checked: { 
            type: Boolean,
            reflect: true
        }
    }

    constructor() {
        super();
        this.checked = false;
    }

    render() {
        return html`
            <section @click=${this.toggle}>
                <span></span>
            </section>
        `;
    }

    toggle() {
        this.checked = !this.checked;
    }
}
customElements.define('eit-switch', EitSwitch);
