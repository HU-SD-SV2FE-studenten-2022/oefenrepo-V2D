export function calcTotalTime(repairs) {
  const SUM_INITIALISE = 0;
  return repairs.reduce((sum, repair) => sum + repair.estimatedRepairTime, SUM_INITIALISE);
}
