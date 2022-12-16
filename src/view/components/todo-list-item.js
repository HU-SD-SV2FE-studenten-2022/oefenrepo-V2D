import { css, html, LitElement } from "lit";
import RepairService from "../../service/repair-service";

const REPAIR_ASSIGNMENTS_UPDATE_EVENT = 'repair-assignments-update';

export default class TodoListItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      id: { type: Number },
      estTime: { type: Number },
    }
  }

  constructor() {
    super();
    this.repairService = new RepairService();
  }

  #removeItem() {
    this.repairService.deleteRepair(this.id).then(() => {
      const repairAssignmentsUpdateEvent = new CustomEvent(REPAIR_ASSIGNMENTS_UPDATE_EVENT, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {}
      });
      this.dispatchEvent(repairAssignmentsUpdateEvent);
    });
  }

  render() {
    return html`
          ID:${this.id} - Tijd ${this.estTime}
          <button @click="${this.#removeItem}">Verwijder</button>
    `;
  }
}

window.customElements.define('todo-list-item', TodoListItem);
