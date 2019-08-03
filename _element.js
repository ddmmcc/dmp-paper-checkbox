import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `dmp-paper-checkbox`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DmpPaperCheckbox extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'dmp-paper-checkbox',
      },
    };
  }
}

window.customElements.define('dmp-paper-checkbox', DmpPaperCheckbox);
