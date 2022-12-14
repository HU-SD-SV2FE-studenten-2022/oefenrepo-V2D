import { LitElement, css, html } from "lit";
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';
import RepairProgress from './repair-progress';

export default class RepairForm extends LitElement {
  static get styles() {
    return css`
      repair-progress {
        display: none;
      }

      @media print {
        repair-progress {
          display: block;
        }
    `;
  }

  get properties() {
    return {};
  }

  #print() {
    window.print();
  }

  render() {
    return html`
      <form>
        <repair-header></repair-header>
        <repair-customer></repair-customer>
        <repair-assignment></repair-assignment>
        <repair-progress></repair-progress>
        <button @click="${this.#print}">Print</button>
      </form>
    `;
  }
}

window.customElements.define('repair-form', RepairForm);
