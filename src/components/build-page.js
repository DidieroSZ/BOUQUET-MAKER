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

/* --- FLOWER ITEM --- */
import './flowerItem.js';
/* --- FLOWER ITEM --- */

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
        this._sliderConfig();
    }

    /* ------------- RENDER FUNCTIONS ------------- */
    render(){
        return html`
            <section class="builder--container d-flexx d-col">
                <button @click=${this._closeBuilder} class="btn--close--builder btn-general btn-circular btn-sec d-flexx">${unsafeHTML(iconos.close)}</button>

                <div class="steps--container d-flexx d-row">
                    <span class="circle--step d-flexx">${unsafeHTML(iconos.flower)}</span>
                    <span class="circle--step d-flexx">${unsafeHTML(iconos.leaf)}</span>
                    <span class="circle--step d-flexx">${unsafeHTML(iconos.pencil)}</span>
                    <span class="circle--step d-flexx">${unsafeHTML(iconos.send)}</span>
                </div>


                <div class="item--builder--card middle--builder">
                    <aside class="configurator--container d-flexx d-col">
                        <div class="top-detail d-flexx"><p class="general-font">Detalles</p></div>
                        <span class="flower--list d-flexx d-row gowun-dodum-regular"><p>x2</p><p>Ortencia</p><button class="d-flexx">${unsafeHTML(iconos.close)}</button></span>
                        <span class="flower--list d-flexx d-row gowun-dodum-regular"><p>x1</p><p>Peonia</p><button class="d-flexx">${unsafeHTML(iconos.close)}</button></span>
                        <span class="flower--list d-flexx d-row gowun-dodum-regular"><p>x3</p><p>Cosmos</p><button class="d-flexx">${unsafeHTML(iconos.close)}</button></span>
                    </aside>
                    

                    <div class="render--container d-flexx d-row">
                        ${this._renderFlowers()}
                    </div>
                </div>

            </section>
        `;
    };

    _renderFlowers(){
        return html`
            <flower-item .flowerName=${'aciano'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'fresia'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'cosmos'} @flower-click=${this._flowerClick}></flower-item>

            <flower-item .flowerName=${'nemesia'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'azaleas'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'gerbera'} @flower-click=${this._flowerClick}></flower-item>

            <flower-item .flowerName=${'aster'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'hibisco'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'lirio'} @flower-click=${this._flowerClick}></flower-item>

            <flower-item .flowerName=${'kalanchoe'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'anémona'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'brunfelsia'} @flower-click=${this._flowerClick}></flower-item>

            <flower-item .flowerName=${'pensamiento'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'plumeria'} @flower-click=${this._flowerClick}></flower-item>
            <flower-item .flowerName=${'zinnia'} @flower-click=${this._flowerClick}></flower-item>
        `;
    }
    /* ------------- RENDER FUNCTIONS ------------- */


    /* ------------- NAVEGATION FUNCTIONS ------------- */
    _closeBuilder(){
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: '/',
            bubbles: true,
            composed: true
        }));
    }
    /* ------------- NAVEGATION FUNCTIONS ------------- */

    
    _sliderConfig(){
        
    }

    _flowerClick(e){
        let flowerName = e.detail.flowerName;
        console.log(flowerName);
    }


    /* ------------- ANIMATION FUNCTIONS ------------- */
    _animatronik(){
        const cont = this.renderRoot.querySelector('.builder--container');
        animate(cont,
            { scale: [0, 1] },
            {ease: [1, 0.068, 0.208, 1.068], duration: 0.8}
        );
    }
    /* ------------- ANIMATION FUNCTIONS ------------- */
}
customElements.define('build-page', BuildPageCompoent);