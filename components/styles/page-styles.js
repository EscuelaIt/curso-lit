import { css } from 'lit';

export const pagesStyles = css`
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
        background-color: #6033dd;
        color: #fff;
    }
`;
