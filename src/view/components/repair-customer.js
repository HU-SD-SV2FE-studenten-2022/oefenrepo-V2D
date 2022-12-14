import { LitElement, css, html } from "lit";

export default class RepairCustomer extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <legend>Klantgegevens</legend>
        <label for="customername">Naam:</label><input id="customername" name="customername" type="text">
        <label for="customertel">Tel:</label><input id="customertel" name="customertel" type="text">
        <label for="customermail">Email:</label><input id="customermail" name="customermail" type="email">s
      </fieldset>
    `;
  }
}

window.customElements.define('repair-customer', RepairCustomer);
