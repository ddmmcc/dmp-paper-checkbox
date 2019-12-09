import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js'

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
      </style>
      <paper-checkbox 
        id="check"
        active="{{active}}"
        aria-active-attribute="ariaActiveAttribute"
        checked="{{checked}}"
        disabled="{{disabled}}"
        focused="{{focused}}"
        invalid="{{invalid}}"
        key-bindings="{{keyBindings}}"
        key-event-target="{{keyEventTarget}}"
        name="{{name}}"
        noink="{{noink}}"
        pointer-down="{{pointerDown}}"
        pressed="{{pointerDown}}"
        received-focus-from-keyboard="{{receivedFocusFromKeyboard}}"
        required="{{required}}"
        stop-keyboard-event-propagation="{{stopKeyboardEventPropagation}}"
        toggles="{{toggles}}"
        validator="{{validator}}"
        value="{{value}}"
      >
      
      </paper-checkbox>
    `;
  }
  static get properties() {
    return {
      active: {notify: true},
      checked: {notify: true},
      disabled: {notify: true},
      focused: {notify: true, readOnly: true},
      invalid: {notify: true},
      pointerDown: {readOnly: true},
      pressed: {readOnly: true},
      receivedFocusFromKeyboard: {readOnly: true}
    };
  }

  ready() {
    super.ready();
    this._additionalStyles();
  }
  
  _additionalStyles () {
    const check = this.$.check;
    let style = document.createElement("style");
    style.innerHTML = `
      #checkbox {
        border-radius: var(--paper-checkbox-radius, 2px);
      }
    `
    check.shadowRoot.appendChild(style);
  }

  addOwnKeyBinding(eventString, handlerName) {
    return this.$.check.addOwnKeyBinding(eventString, handlerName);
  }

  ensureRipple(optTriggeringEvent) {
    return this.$.check.ensureRipple(optTriggeringEvent);
  }

  getRipple() {
    return this.$.check.getRipple();
  }

  hasRipple() {
    return this.$.check.hasRipple();
  }

  hasValidator() {
    return this.$.check.hasValidator();
  }

  keyboardEventMatchesKeys(event, eventString) {
    return this.$.check.keyboardEventMatchesKeys(event, eventString);
  }

  removeOwnKeyBindings() {
    return this.$.check.removeOwnKeyBindings();
  }

  validate(obj) {
    return this.$.check.validate(obj);
  }

}

window.customElements.define('dmp-paper-checkbox', DmpPaperCheckbox);
