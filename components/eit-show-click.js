import { LitElement, html, css } from 'lit';

export class EitShowClick extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    // static get properties() {
    //   return {
    //     x: { type: Number },
    //     y: { type: Number },
    //   };
    // }

    static get properties() {
      return {
        x: { type: Number },
        y: { type: Number },
        foo: { type: String },
      };
    }

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.clickHandler = this.showClickPosition.bind(this);
        console.log(this.x, this.y);
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback ejecutado...');
        document.addEventListener('click', this.clickHandler);
    }

    firstUpdated() {
        console.log(this.x, this.y, this.shadowRoot.getElementById('elinput'));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback ejecutado...');
        document.removeEventListener('click', this.clickHandler); 
    }

    updated(changedProperties) {
        console.log(changedProperties);
        if(changedProperties.has('x')) {
            console.log(`x valía ${changedProperties.get('x')} y ahora vale ${this.x}`);
        }

    }
    

    render() {
        return html`
            <p>Han hecho clic en ${this.x} x ${this.y}</p>
            <p>
                input: <input id="elinput" type="text" value="${this.x}" />
            </p>
        `;
    }

    showClickPosition(e) {
        console.log('estoy en showClickPosition', this);
        this.x = e.clientX;
        this.y = e.clientY;
    }    
}
customElements.define('eit-show-click', EitShowClick);
