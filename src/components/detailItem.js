import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
import detailItemStyles from '../css/detailItemStyles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { iconos } from '../utils/icons.js';
/* --- ICONS --- */

export class DetailItem extends LitElement {
    static properties = {
        cantidad: { type: Number },
        nombre: { type: String },
    };

    constructor(){
        super();
        this.cantidad = 1;
        this.nombre = 'azaleas';
    }

    static styles =[
        css` ${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(detailItemStyles)}`,
    ];

    render(){
        return html`
            <span class="flower--list d-flexx d-row gowun-dodum-regular">
                <p>${ this.cantidad}x</p><p>${this.nombre}</p>
                <button 
                    @click=${this._btnDelete} 
                    class="d-flexx">
                    ${unsafeHTML(iconos.close)}
                </button>
            </span>
        `;
    }

    _btnDelete(e){
        this.dispatchEvent(new CustomEvent('delete-detail', {
            bubbles: true,
            composed: true,
            detail: { type: this.nombre, }
        }));
    }
}
customElements.define('detail-item', DetailItem);