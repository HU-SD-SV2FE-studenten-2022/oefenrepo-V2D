import { css, html, LitElement } from "lit";
import TodoListItem from "./todo-list-item";
import RepairService from "../../service/repair-service";

const REPAIR_ASSIGNMENTS_UPDATE_EVENT = 'repair-assignments-update';

export default class TodoList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      repairAssignments: { type: Array },
    }
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.repairAssignments = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
    this.addEventListener(REPAIR_ASSIGNMENTS_UPDATE_EVENT, this.#repairAssignmentsUpdateHandler);
  }

  disconnectedCallback() {
    this.removeEventListener(REPAIR_ASSIGNMENTS_UPDATE_EVENT, this.#repairAssignmentsUpdateHandler);
    super.disconnectedCallback();
  }

  #repairAssignmentsUpdateHandler(event) {
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
  }

  render() {
    return html`
      <ul>
        ${
          this.repairAssignments
            .map((repair) => html`<todo-list-item id="${repair.id}" estTime="${repair.estimatedRepairTime}"></todo-list-item>`)}
      </ul>
    `;
  }
}

window.customElements.define('todo-list', TodoList);
