function getQuarter() {
  const month = this.getMonth();
  return Math.floor(month / 3) + 1;
}

Date.prototype.getQuarter = getQuarter;

const today = new Date();
console.log(today.getQuarter()); // Output: Current quarter of the year
