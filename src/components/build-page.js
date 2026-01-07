import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { iconos } from '../utils/icons.js';
/* --- ICONS --- */

/* --- IMAGES --- */
import flower_sprite from '../media/sprites/flower_sprite.png';
import backimage from '../media/background-header.png';
/* --- IMAGES --- */

export class BuildPageCompoent extends LitElement {

    static properties = {
        hola: { type: String },
    }
    constructor(){
        super();
        this.hola = 'Hola';
    }
    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
    ]

    render(){
        return html`
           <p>HOLA</p>
        `;
    };


}
customElements.define('build-page', BuildPageCompoent);