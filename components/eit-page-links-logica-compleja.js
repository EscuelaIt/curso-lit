import { LitElement, html, css } from 'lit';

export class EitPageLinks extends LitElement {
    static styles = [
        css`
            :host {
            display: block;
        }
        ul {
            display: flex;
            margin: 0;
            padding: 0;
        }
        li {
            padding: 0.5em;
            border: 1px solid #ccc;
            background-color: #eee;
            list-style-type: none;
            margin-right: 0.5em;
            min-width: 1em;
            text-align: center;
        }
        li.selected {
            background-color: #d33;
            color: #fff;
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
                        class="${this.createClass(page)}"
                    >${page}</li>
                `)}
            </ul>
        `;
    }

    createClass(page) {
        if(page === this.selectedPage && page % 2 === 0) {
            return 'selected';
        }
        if(page + 1 === this.selectedPage) {
            return 'selected';
        }
        return ''; 
    }
}
customElements.define('eit-page-links', EitPageLinks);
