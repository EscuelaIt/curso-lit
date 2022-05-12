import { LitElement, html, css } from 'lit';
import { pagesStyles } from './styles/page-styles.js';

export class EitPageLinks extends LitElement {
    static styles = [
        pagesStyles,
        css`
            :host {
                display: block;
                margin-bottom: 1rem;
            }

            li.selected {
                background-color: #32bd16;
            }
        `
    ];

    static get properties() {
      return {
        pages: { type: Array },
        selectedPage: { 
            type: String,
            //state: true,
            // "API del componente"
        },
      };
    }

    constructor() {
        super();
        this.pages = [];
        this.selectedPage = 0;
    }

    render() {
        return html`
            <ul>
                ${this.pages.map(page => html`
                    <li 
                        @click=${() => this.setPage(page)}
                        class="${this.selectedPage == page ? 'selected' : ''}"
                    >${page}</li>
                `)}
            </ul>
            ${this.selectedPage}
        `;
    }

    setPage(page) {
        this.selectedPage = page;
        this.dispatchEvent(new CustomEvent('eit-page-links-change', {
            bubbles: true,
            composed: true,
            detail: {
                selectedPage: this.selectedPage
            }
        }));
    }
}
customElements.define('eit-page-links', EitPageLinks);
