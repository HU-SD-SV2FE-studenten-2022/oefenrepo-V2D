import Repair from "../model/repair";

const REPAIR_KEY = 'repairs';
const ID_KEY = 'nextRepairId';

export default class RepairService {

  constructor() {
    this.nextId = Number(window.localStorage.getItem(ID_KEY));
    if (!this.nextId) {
      this.nextId = 0;
    }

    this.repairAssignments = JSON.parse(window.localStorage.getItem(REPAIR_KEY));
    if (!this.repairAssignments) {
      this.repairAssignments = [];
    }
  }

  /**
   * returns the next repair id
   */
  nextRepairId() {
    this.nextId += 1;
    return new Promise((resolve) => {
      window.localStorage.setItem(ID_KEY, this.nextId);
      resolve(this.nextId);
    });
  }

  /**
   * slaat de reparatie
   * @param { Repair }
   */
  addRepair(repairAssignment) {
    return new Promise((resolve) => {
      this.repairAssignments = [...this.repairAssignments, repairAssignment];
      window.localStorage.setItem(REPAIR_KEY, JSON.stringify(this.repairAssignments));
      resolve();
    });
  }

  getRepairs() {
    return new Promise((resolve) => {
      this.repairAssignments = JSON.parse(window.localStorage.getItem(REPAIR_KEY));
      if (!this.repairAssignments) {
        this.repairAssignments = [];
      }
      resolve([...this.repairAssignments]);
    })
  }

  deleteRepair(id) {
    return new Promise((resolve) => {
      this.repairAssignments = this.repairAssignments.filter((repair) => repair.id !== id);
      window.localStorage.setItem(REPAIR_KEY, JSON.stringify(this.repairAssignments));
      resolve();
    })
  }
}