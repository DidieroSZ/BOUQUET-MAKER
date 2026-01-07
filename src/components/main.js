import { LitElement, html, css } from "lit-element";
import generalStyles from '../css/generalStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../utils/icons.js';

import flower_sprite from '../media/sprites/flower_sprite.png';
import backimage from '../media/background-header.png';

export class MainComponent extends LitElement {

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
            <main class="main-cotainer d-flexx d-row">
                <a class="portfolio--link general-font" href="https://didierosz.github.io/DIDIER.github.io/" target="_blank" class="image--back"> Didier Saucedo</a>
                    
                <article class="card--container title-font d-flexx d-col">
                    <p class="title--card">Bouquet</p>
                    <p class="title--card d-flexx d-row"><span class="d-flexx">${unsafeHTML(iconos.flower)}</span> Maker</p>
                    <div class="inner--card d-flexx d-col">
                        <p class="general-font">Diseña ramos virtuales personalizados y acompáñalos con el mensaje perfecto para cada ocasión.</p>
                        <button class="btn-general btn-principal">Personaliza tu ramo</button>
                    </div>
                </article>

            </main>
        `;
    };
}

customElements.define('main-component', MainComponent);