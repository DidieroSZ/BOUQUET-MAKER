import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
import homePageStyles from '../css/homePageStyles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { iconos } from '../utils/icons.js';
/* --- ICONS --- */


import { animate, press, delay } from "motion"

export class HomePageComponent extends LitElement {

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(homePageStyles)}`,
    ]

    firstUpdated(){
        this._animatronik();
    }


    /* ------------- RENDER FUNCTIONS ------------- */
    render(){
        return html`
            <article class="card--container title-font d-flexx d-col">
                <p class="title--card">Bouquet</p>
                <p class="title--card d-flexx d-row"><span class="d-flexx">${unsafeHTML(iconos.flower)}</span> Maker</p>
                <div class="inner--card d-flexx d-col">
                    <p class="general-font">
                        Diseña ramos virtuales personalizados y acompáñalos con el mensaje perfecto para cada ocasión.
                    </p>
                    <button @click=${this._goToBuilder} class="btn-general btn-principal gowun-dodum-regular">Personaliza tu ramo</button>
                </div>
            </article>
        `;
    };  
    /* ------------- RENDER FUNCTIONS ------------- */


    /* ------------- NAVEGATION FUNCTIONS ------------- */
    _goToBuilder() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: '/build/',
            bubbles: true,
            composed: true
        }));
    }
    /* ------------- NAVEGATION FUNCTIONS ------------- */


    /* ------------- ANIMATION FUNCTIONS ------------- */
    _animatronik(){
        const cont = this.renderRoot.querySelector('.card--container');
        delay(() => {
            animate(cont,
                { rotate: 5 },
                {
                    type: "spring",
                    visualDuration: 0.8,
                    bounce: 0.69
                }
            );
        }, 0.7)
        
    }
    /* ------------- ANIMATION FUNCTIONS ------------- */
}
customElements.define('home-page', HomePageComponent);