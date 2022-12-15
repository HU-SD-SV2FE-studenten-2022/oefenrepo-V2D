import { LitElement, css, html } from "lit";
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';
import RepairProgress from './repair-progress';
import RepairService from "../../service/repair-service";

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
      }
    `;
  }

  static get properties() {
    return {
      repairId: { type: Number },
      timeestimation: { type: Number },
    };
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.repairId = -1;
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.nextRepairId().then((id) => this.repairId = id);
  }

  #print() {
    window.print();
  }

  render() {
    console.log(`render ${this.repairId}`);
    return html`
      <form>
        <repair-header reparatieid="${this.repairId}"></repair-header>
        <repair-customer></repair-customer>
        <repair-assignment></repair-assignment>
        <repair-progress></repair-progress>
        <button @click="${this.#print}">Print</button>
      </form>
    `;
  }
}

window.customElements.define('repair-form', RepairForm);
