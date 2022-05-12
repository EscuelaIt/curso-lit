import { LitElement, html, css } from 'lit';
import '@dile/dile-pages/dile-pages';
import './eit-switch';
import './eit-prop';
import './eit-page-links';

export class EitPageSwitch extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
      return {
        active: { 
            type: Boolean, 
            //reflect: true 
        },
        pages: { type: Array },
        page: { 
            type: String,
            reflect: true
        },
        test: { type: String },
      };
    }

    constructor() {
        super();
        this.active = false;
        this.page = 'tres';
        this.test = '5';
        this.pages = ['uno', 'dos', 'tres'];
    }

    render() {
        return html`

            <!-- <eit-prop propString=${this.test} propNumber=${this.test}></eit-prop> -->

            <eit-page-links 
                .pages=${this.pages} 
                selectedPage="${this.page}"
                @eit-page-links-change=${this.doSelectedChange}
            ></eit-page-links>

            <eit-switch 
                ?checked=${this.active}
                @eit-switch-change=${this.changeActiveListener}
            ></eit-switch>

            <button @click=${this.changeActive}>Cambiar active</button>
            <button @click=${this.showOne}>Cambiar página 1</button>
            <button @click=${this.show('dos')}>Cambiar página 2</button>
            <button @click=${this.show('tres')}>Cambiar página 3</button>

            ${this.active 
                ? this.pagesTemplate 
                : ''
            }
        `;
    }

    show(pageParameter) {
        return () => {
            this.page = pageParameter;
            this.changeActive();
        }
    }

    get pagesTemplate() {
        return html`
            <dile-pages attrForSelected="name" selected="${this.page}">
                <div name="uno">
                    <p>Esta es la página 1</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur</p>
                </div>
                <div name="dos">
                    <p>Esta es la página 2</p>
                    <ul>
                        <li>Hola</li>
                        <li>Adiós</li>
                    </ul>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur</p>
                </div>
                <div name="tres">
                    <p>Esta es la página 3</p>
                    <blockquote>
                        Esto es un poco de contenido para hacer bulto
                    </blockquote>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur</p>
                </div>
            </dile-pages>
        `;
    }

    changeActive() {
        this.active = !this.active;
    }

    showOne() {
        this.page = 'uno';
    }

    changeActiveListener(e) {
        this.active = e.detail.checked;
    }

    doSelectedChange(e) {
        this.page = e.detail.selectedPage;
    }

}
customElements.define('eit-page-switch', EitPageSwitch);
