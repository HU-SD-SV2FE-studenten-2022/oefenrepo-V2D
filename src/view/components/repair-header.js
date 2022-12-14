import { LitElement, css, html } from "lit";

export default class RepairHeader extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      reparatieid: { type: Number }
    };
  }

  render() {
    return html`
      <fieldset>
        <p>ID: ${this.reparatieid} Datum: ${new Date().toLocaleDateString()}  Tijd: ${new Date().toLocaleTimeString()}</p>
      </fieldset>
    `;
  }
}

window.customElements.define('repair-header', RepairHeader);
