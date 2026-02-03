import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
import flowerItemStyles from '../css/flowerItemStyles.css?inline';
/* --- STYLES --- */

export class FlowerItem extends LitElement{
    static properties = {
        flowerName: { type: String },
    };
    constructor(){
        super();
        this.flowerName = 'aciano';
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(flowerItemStyles)}`,
    ];

    /* ------------- RENDER FUNCTIONS ------------- */
    render(){
        return html`
            <figure 
                class="flower-item" 
                @click=${this._flowerClick} 
                data-flower=${this.flowerName}
                id=${this.flowerName}>
                <p class="general-font">
                    ${this.flowerName}
                </p>
            </figure>
        `;
    }
    /* ------------- RENDER FUNCTIONS ------------- */


    /* ------------- CLICK FUNCTIONS ------------- */
    _flowerClick(){

        this.dispatchEvent(new CustomEvent('flower-click', {
            bubbles: true,
            composed: true,
            detail: { flowerName: this.flowerName, }
        }));
        
    }
    /* ------------- CLICK FUNCTIONS ------------- */
}
customElements.define('flower-item', FlowerItem);