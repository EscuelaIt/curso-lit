import { LitElement, html, css } from 'lit';
import './eit-user';
import './eit-page-links';

import { users } from '../users.js';

export class UserList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
      return {
          orderTypes: { type: Array },
          selectedOrder: { type: String },
        //users: { type: Array }
      };
    }

    constructor() {
        super();
        this.orderTypes = ['asc', 'desc'];
        this.selectedOrder = 'asc';
        // this.users = [];
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.users = users);
    }

    render() {
        return html`
            <eit-page-links 
                .pages=${this.orderTypes} 
                selectedPage=${this.selectedOrder}
                @eit-page-links-change=${this.changeSelectedOrder}
            ></eit-page-links>
            ${this.doOrder(this.selectedOrder).map( user => html`
                    <eit-user .user="${user}"></eit-user>
            `)}
        `;
    }

    doOrder(order) {
        const usersOrdered = users.sort( (a, b) => {
            if(a.name === b.name) {
                return 0;
            }
            if (order === 'asc') {    
                return a.name > b.name ? 1 : -1;
            } else {
                return a.name < b.name ? 1 : -1;
            }
        });
        return usersOrdered;
    }

    changeSelectedOrder(e) {
        this.selectedOrder = e.detail.selectedPage;
    }
}
customElements.define('user-list', UserList);
