import { LitElement, html, css } from 'lit';

export class EitCard extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-bottom: 1rem;
            --eit-switch-off-state-color: rgb(235, 44, 200);
            --eit-switch-on-state-color: rgb(220, 250, 25);
        }
        section {
            border: 1px solid #ccc;
            padding: 1em;
            border-radius: 0.5em;
            box-shadow: 0 0 0.5em #ccc;
        }
        footer {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #ccc;
        }
    `

    static get properties() {
      return {
        title: { type: String }
      };
    }

    

    constructor() {
        super();
        this.title = '';
    }

    render() {
        return html`
        <section>
            ${this.titleTemplate}
            ${this.bodyTemplate}
            ${this.footerTemplate}
        </section>

        <p>En principio todo lo del render es shadow dom!!!!</p>
        <p>Si utilizo createRenderRoot() {return this;} todo lo que iría en shadow DOM se va al ligth dom!!!</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

        `;
    }

    get titleTemplate() {
        return html`
            ${this.title === "" ? '' : html`<h1>${this.title}</h1>`}
        `;
    }

    get bodyTemplate() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }

    get footerTemplate() {
        return html`
            <footer>
                <slot name="actions"></slot>
            </footer>
        `;
    }
}
customElements.define('eit-card', EitCard);
