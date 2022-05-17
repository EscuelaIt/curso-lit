import { LitElement, html, css } from 'lit';
import './eit-user';
import './eit-page-links';
import { users } from '../users.js';
import { PerformanceMixin } from '../mixins/performanceMixin';

export class UserList extends PerformanceMixin(LitElement) {
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
          orderedUsers: { type: Array },
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
        
        this.usersAsc = [...users.sort((a, b) => {
            if(a.name === b.name) {
                return 0;
            }
            return a.name > b.name ? 1 : -1;
        })];
        this.usersDesc = [...users.sort((a, b) => {
            if(a.name === b.name) {
                return 0;
            }
            return a.name < b.name ? 1 : -1;
        })];
        this.orderedUsers = this.usersAsc;

    }

    change100Times() {
        //console.log('change100Times', this.times);
        if(this.times === 0) {
            this.startTime();
        }
       if(this.times < 3) {
            this.times++;
            this.orderedUsers = this.times % 2 ? this.usersAsc : this.usersDesc;
            this.updateComplete.then(() => this.change100Times());
        } else {
            this.endTime();
            this.reportPerformance();
            this.times = 0;
        }
    }

    render() {
        return html`
            <button @click=${this.change100Times}>100</button>
            <eit-page-links 
                .pages=${this.orderTypes} 
                selectedPage=${this.selectedOrder}
                @eit-page-links-change=${this.changeSelectedOrder}
            ></eit-page-links>
            ${this.mapRepeatTemplate}
        `;
    }

    get mapRepeatTemplate() {
        return html`
            ${this.orderedUsers.map( user => html`
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
        if(this.selectedOrder === 'asc') {
            this.orderedUsers = this.usersAsc;
        } else {
            this.orderedUsers = this.usersDesc;
        }
    }
}
customElements.define('user-list', UserList);
