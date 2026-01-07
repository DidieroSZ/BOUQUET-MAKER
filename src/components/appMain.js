import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from 'lit-element';

/* --- STYLES --- */
import generalStyles from '../css/generalStyles.css?inline';
/* --- STYLES --- */

/* --- ROUTES --- */
import { getRoute } from '../utils/router.js';
/* --- ROUTES --- */

/* --- COMPONENTS --- */
import './home-page.js'
import './build-page.js'
/* --- COMPONENTS --- */

export class AppMain extends LitElement {

    static properties = {
        route: { type: String },
    };
    constructor(){
        super();
        this.route = getRoute();
        window.addEventListener('popstate', () => {
            this.route = getRoute();
        });
    }
    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
    ]

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('navigate', e => this.navigate(e.detail));
    }

    

    render(){
        return html`
            <main class="main-cotainer d-flexx d-row">
                <a class="portfolio--link general-font" href="https://didierosz.github.io/DIDIER.github.io/" target="_blank" class="image--back"> Didier Saucedo</a>
                
                ${this._renderPage()}
            </main>
        `;
    };

    _renderPage(){
        switch (this.route) {
            case '/build/':
                return html`<build-page></build-page>`;
            default:
                return html`<home-page></home-page>`;
        }
    }

    navigate(path) {
        history.pushState({}, '', `/BOUQUET-MAKER${path}`);
        this.route = getRoute();
    }
}
customElements.define('main-component', AppMain);