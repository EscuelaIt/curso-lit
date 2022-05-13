import { LitElement, html, css } from 'lit';

export class EitMenuOverlay extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                position: relative;
            }
            .overlay {
                display: none;
                position: absolute;
                background-color: beige;
                padding: 1rem;
                border: 1px solid #ddd;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                width: 250px;
            }
            .opened {
                display: block;
            }
            ::slotted(div) {
                font-family: sans-serif;
            }
        `
    ];

    static get properties() {
      return {
        opened: { type: Boolean },
      };
    }

    constructor() {
        super();
        console.log('constructor ejecutado...');
        this.opened = false;
        this.documentCloseHandler = this.close.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this.documentCloseHandler);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.documentCloseHandler);
    }

    render() {
        return html`
            <a href="#" @click=${this.toggle}>
                <slot name="trigger"></slot>
            </a>
            <div class="overlay ${this.opened ? 'opened' : ''}">
                <slot name="menu"></slot>
            </div>
        `;
    }

    toggle(e) {
        this.opened = !this.opened;
        e.stopPropagation();
        e.preventDefault();
    }

    close() {
        console.log('close en menu overlay' , this);
        this.opened = false;
    }

    
}
customElements.define('eit-menu-overlay', EitMenuOverlay);
