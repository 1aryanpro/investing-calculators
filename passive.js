const dollars = (d) => d.toFixed(2);

let rate_by_year = 1.12;
let r = Math.pow(1.12, 1 / 12); // rate by month

let months = 12;

let investment_per_month = 50;
let principle = 0;

// let money_final = principle;
// for (let t = 0; t < months; t++) {
//   money_final += investment_per_month;
//   money_final *= r;
// }

let principle_growth = principle * Math.pow(r, months);
let profit_rate = (Math.pow(r, months + 1) - r) / (r - 1);
let money_final = profit_rate * investment_per_month + principle_growth;

let money_invested = investment_per_month * months + principle;
console.log('Money Final:    ', dollars(money_final));
console.log('Money Invested: ', dollars(money_invested));
console.log('--------------------------');
console.log('Profit:          ', dollars(money_final - money_invested));
