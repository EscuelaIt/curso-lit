import { LitElement, html, css } from 'lit';
import { pagesStyles } from './styles/page-styles.js';

export class EitPageLinks extends LitElement {
    static styles = [
        pagesStyles,
        css`
            :host {
                border: 3px solid red;
            }
            li.selected {
                background-color: #32bd16;
            }
        `
    ];

    static get properties() {
      return {
        pages: { type: Array },
        selectedPage: { type: Number },
      };
    }

    constructor() {
        super();
        this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selectedPage = 7;
    }

    render() {
        return html`
            <ul>
                ${this.pages.map(page => html`
                    <li 
                        class="${this.selectedPage === page ? 'selected' : ''}"
                    >${page}</li>
                `)}
            </ul>
        `;
    }
}
customElements.define('eit-page-links', EitPageLinks);
