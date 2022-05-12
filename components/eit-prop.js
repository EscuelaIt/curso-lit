import { LitElement, html, css } from 'lit';

export class EitProp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
      return {
        propString: { type: String,
            converter: {
                fromAttribute: (value, type) => {
                  return '--' + value + '--';
                },
              }
        },
        propNumber: { type: Number }
      };
    }

    render() {
        return html`
            <p>PropString: ${this.propString} ${typeof this.propString}</p>
            <p>PropNumber: ${this.propNumber} ${typeof this.propNumber}</p>
        `;
    }
}
customElements.define('eit-prop', EitProp);
