import { LitElement, html, css } from 'lit';
import { UserList } from './user-list';
import {repeat} from 'lit/directives/repeat.js';

export class UserListOptimized extends UserList {

    render() {
        return html`
            ${super.render()}
            ${this.footerTemplate}
        `;
    }
    get mapRepeatTemplate() {
        return html`
            ${repeat(this.orderedUsers, (user) => user.id, (user, index) => html`
                <eit-user .user="${user}"></eit-user>
            `)}
        `;
    }

    get footerTemplate() {
        return html`
            <footer>Hemos listado ${this.orderedUsers.length} usuarios</footer>
        `;
    }
}
customElements.define('user-list-optimized', UserListOptimized);
