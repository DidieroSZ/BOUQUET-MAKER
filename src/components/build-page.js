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

/* --- DETAIL ITEM --- */
import './detailItem.js';
/* --- DETAIL ITEM --- */

/* --- IMAGES --- */
import flower_sprite from '../media/sprites/flower_sprite.png';
import backimage from '../media/background-header.png';
/* --- IMAGES --- */

import { animate } from "motion"

export class BuildPageCompoent extends LitElement {

    static properties = {
        detallesBouquet: { type: Object},
    }
    constructor(){
        super();
        this.detallesBouquet = {
            flores:[],
            follaje: [],
            mensaje: [],
        };
    }
    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(buildPageStyles)}`,
    ]

    firstUpdated(){
        this._animatronik();
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
                        ${this._renderDetails()}
                    </aside>


                    <div class="render--container d-flexx d-row">
                        ${this._renderFlowers()}
                    </div>
                </div>

            </section>
        `;
    };

    _renderFlowers(){
        const flores = ['aciano', 'fresia', 'cosmos', 'nemesia', 'azaleas', 'gerbera', 
        'aster', 'hibisco', 'lirio', 'kalanchoe', 'anémona', 'brunfelsia', 'pensamiento', 'plumeria', 'zinnia'];
        return html`
            ${flores.map(flor => html`
                <flower-item .flowerName=${flor} @flower-click=${this._flowerClick}></flower-item>
            `)}
        `;
    }
    _renderDetails(){
        if (this.detallesBouquet.flores.length != 0) {
            return html`
            ${this.detallesBouquet.flores.map(f => html`
                <detail-item @delete-detail=${this._flowerDeleteClick} .cantidad=${f.cant} .nombre=${f.nombre}></detail-item>
            `)}
            `;
        }
        else{
            return html`
                <p class="gowun-dodum-regular"> Sin flores o follaje añadido.</p>
            `;
        }
        
        
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


    /* ------------- FLOWERS FUNCTIONS ------------- */
    _flowerClick(e){
        let fN = e.detail.flowerName;
        this._addFlower(fN);
    }
    _flowerDeleteClick(e){
        let fN = e.detail.type;
        this._deleteFlower(fN);
    }

    _addFlower(fN){
        let dBF = this.detallesBouquet.flores;
        let exist = false;
        dBF.forEach(f => {
            if (f.nombre === fN) {
                f.cant++;
                exist = true;
            }
        });
        if (!exist) {
            let formato = { nombre: fN, cant: 1 };
            dBF = [...dBF, formato];
        }
        this.detallesBouquet.flores = dBF;
        this.requestUpdate();
    }
    _deleteFlower(fN){
        console.log('Borrando: ', fN)
        let dBF = this.detallesBouquet.flores;
        dBF.forEach((f, i) => {
            if (f.nombre === fN) {
                f.cant--;
                
            }
            if (f.cant <= 0) {
                dBF.splice(i, 1);
            }
        });
        this.detallesBouquet.flores = dBF;
        this.requestUpdate();
    }
    /* ------------- FLOWERS FUNCTIONS ------------- */


    /* ------------- ANIMATION FUNCTIONS ------------- */
    _animatronik(){
        const cont = this.renderRoot.querySelector('.builder--container');
        animate(cont,
            { scale: [0.1, 1] },
            /* { ease: "circInOut", duration: 0.8 } */
            { ease: [1, 0.068, 0.208, 1.068], duration: 0.8 }
        );
    }
    /* ------------- ANIMATION FUNCTIONS ------------- */
}
customElements.define('build-page', BuildPageCompoent);