import { LitElement, css, html } from "lit";

export default class RepairProgress extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <legend>Uitvoering</legend>
        <label for="onderdelen">Problem beschrijving</label>
        <textarea id="onderdelen" name="onderdelen" rows="10" cols="70"></textarea>
      </fieldset>
    `;
  }
}

window.customElements.define('repair-progress', RepairProgress);
