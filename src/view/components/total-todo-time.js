import { css, html, LitElement } from "lit";
import RepairService from "../../service/repair-service";
import { calcTotalTime } from "../../utils/repair-utils";

const REPAIR_ASSIGNMENTS_UPDATE_EVENT = 'repair-assignments-update';

export default class TotalTodoTime extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      repairAssignments: { type: Array },
    }
  }

  constructor() {
    super();
    this.repairService = new RepairService(this.localName);
    this.repairAssignments = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
    window.addEventListener(REPAIR_ASSIGNMENTS_UPDATE_EVENT, this.#repairAssignmentsUpdateHandler.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener(REPAIR_ASSIGNMENTS_UPDATE_EVENT, this.#repairAssignmentsUpdateHandler.bind(this));
  }

  #repairAssignmentsUpdateHandler(event) {
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
  }

  render() {
    return html`
    <p>totale todo tijd: ${calcTotalTime(this.repairAssignments)}</p>`;
  }
}

window.customElements.define('total-todo-time', TotalTodoTime);
