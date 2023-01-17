import { Subject } from "rxjs";
import Repair from "../model/repair";

const REPAIR_KEY = 'repairs';
const ID_KEY = 'nextRepairId';

export default class RepairService {

  static repairs$ = new Subject([]);

  constructor(caller) {
    this.caller = caller;
    console.log(`constructor ${this.caller}`);
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
      RepairService.repairs$.next(this.repairAssignments);
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
      RepairService.repairs$.next(this.repairAssignments);
      resolve();
    })
  }

  triggerUpdate() {
    console.log(`${this.caller}, triggerUpdate`);
    this.repairAssignments = JSON.parse(window.localStorage.getItem(REPAIR_KEY));
    if (!this.repairAssignments) {
      this.repairAssignments = [];
    }
    RepairService.repairs$.next(this.repairAssignments);
  }
}