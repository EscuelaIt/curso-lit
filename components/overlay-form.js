import { LitElement, html, css } from 'lit';
import 'eit-info-overlay/eit-info-overlay';

export class OverlayForm extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        
        <eit-info-overlay id="overlay">
            <form @submit="${this.submit}">
               <input type="text" name="name" placeholder="Name">
               <button>Enviar</button>
            </form>
        </eit-info-overlay>

        `;
    }

    submit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        this.shadowRoot.getElementById('overlay').close();
    }
}
customElements.define('overlay-form', OverlayForm);
