import { LitElement, css, html } from "lit";

const ESTIMATE_TIME_CHANGED_EVENT = 'estimate-time-changed';

export default class RepairAssignment extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  #changedEstimateHandler(event) {
    const estimateTimeEvent = new CustomEvent(ESTIMATE_TIME_CHANGED_EVENT, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        estimatedTime: Number(event.target.value),
      }
    });
    this.dispatchEvent(estimateTimeEvent);
  }

  render() {
    return html`
      <fieldset>
        <legend>Opdracht</legend>
        <label for="description">Problem beschrijving</label>
        <textarea id="description" name="description" rows="10" cols="70"></textarea>
        <label for="priceestimate">Geschatte prijs</label><input id="priceestimate" name="priceestimate" type="number">
        <label for="timeestimate">Geschatte reparatietijd</label><input id="timeestimate" name="timeestimate" type="number" @input="${this.#changedEstimateHandler}">        
      </fieldset>
    `;
  }
}

window.customElements.define('repair-assignment', RepairAssignment);
