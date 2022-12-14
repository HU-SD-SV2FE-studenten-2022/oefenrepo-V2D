import { LitElement, css, html } from "lit";

export default class RepairHeader extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <p>Datum: ${new Date().toLocaleDateString()}  Tijd: ${new Date().toLocaleTimeString()}</p>
      </fieldset>
    `;
  }
}

window.customElements.define('repair-header', RepairHeader);
