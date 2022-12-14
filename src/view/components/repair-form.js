import { LitElement, css, html } from "lit";
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';
import RepairProgress from './repair-progress';

export default class RepairForm extends LitElement {
  get styles() {
    return css``;
  }

  get properties() {
    return {};
  }

  render() {
    return html`
      <form>
        <repair-header></repair-header>
        <repair-customer></repair-customer>
        <repair-assignment></repair-assignment>
        <repair-progress></repair-progress>
      </form>
    `;
  }
}

window.customElements.define('repair-form', RepairForm);
