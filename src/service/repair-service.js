export default class RepairService {

  constructor() {
    this.nextId = 0;
  }

  /**
   * returns the next repair id
   */
  nextRepairId() {
    this.nextId += 1;
    return new Promise((resolve) => {
      resolve(this.nextId);
    });
  }
}