import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
import buildPageStyles from '../css/buildPageStyles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { iconos } from '../utils/icons.js';
/* --- ICONS --- */

/* --- IMAGES --- */
import flower_sprite from '../media/sprites/flower_sprite.png';
import backimage from '../media/background-header.png';
/* --- IMAGES --- */

import { animate, press, delay } from "motion"

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
        css` ${unsafeCSS(buildPageStyles)}`,
    ]

    firstUpdated(){
        this._animatronik();
    }

    render(){
        return html`
           <section class="builder--container d-flexx d-col">
            ddada
           </section>
        `;
    };

     _animatronik(){
        const cont = this.renderRoot.querySelector('.builder--container');
        animate(cont,
            { scale: [0, 1] },
            {ease: [1, 0.068, 0.208, 1.068], duration: 0.8}
        );
    }
}
customElements.define('build-page', BuildPageCompoent);