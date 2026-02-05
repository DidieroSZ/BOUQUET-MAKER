import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
import flowerItemStyles from '../css/flowerItemStyles.css?inline';
/* --- STYLES --- */

import { animate, press, hover } from "motion"

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

    firstUpdated(){
        this._animatronik();
    }

    /* ------------- RENDER FUNCTIONS ------------- */
    render(){
        return html`
            <figure 
                class="flower-item d-flexx" 
                @click=${this._flowerClick} 
                data-flower=${this.flowerName}>
                <span class="flower--img"></span>
                <span class="gradient"></span>
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


    /* ------------- ANIMATION FUNCTIONS ------------- */
    _animatronik(){
        const cont = this.renderRoot.querySelector('.flower-item');

        const gestureState = new WeakMap();

        const transition = { type: "spring", stiffness: 500, damping: 25 };

        const initialState = {
            isHovered: false,
            isPressed: false,
        };

        function setGesture(element, update) {
            const state = gestureState.get(element) || { ...initialState }
            const newState = { ...state, ...update }
            gestureState.set(element, newState)

            let scale = 1
            if (newState.isPressed) {
                scale = 0.7
            } else if (newState.isHovered) {
                scale = 1.2
            }
            animate(element, { scale }, transition)
        }

        hover(cont, (element) => {
            setGesture(element, { isHovered: true })
            return () => setGesture(element, { isHovered: false })
        });
        press(cont, (element) => {
            setGesture(element, { isPressed: true })
            return () => setGesture(element, { isPressed: false })
        });
    }
    /* ------------- ANIMATION FUNCTIONS ------------- */
}
customElements.define('flower-item', FlowerItem);