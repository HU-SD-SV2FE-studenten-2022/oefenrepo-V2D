import { LitElement, css, html } from "lit";

export default class RepairAssignment extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <legend>Opdracht</legend>
        <label for="description">Problem beschrijving</label>
        <textarea id="description" name="description" rows="10" cols="70"></textarea>
        <label for="priceestimate">Geschatte prijs</label><input id="priceestimate" name="priceestimate" type="number">
      </fieldset>
    `;
  }
}

window.customElements.define('repair-assignment', RepairAssignment);
