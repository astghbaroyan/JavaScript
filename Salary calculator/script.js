/**Astghik Baroyan */
//Salary calculator

const salary = prompt('Enter the amount of salary ', '');
console.log('salary amount is:', salary);

let pensionSystem = confirm(
  'Do you participate in the mandatory funded pension system? ');
console.log('Pension system: ', pensionSystem);

let penSystmResult = 0;
if (pensionSystem === true) {
  penSystmResult = getSocialFee();
  console.log('Social fee is', penSystmResult);
}

let incomeTax = getIncomeTax();
console.log('Income Tax', incomeTax);

function getIncomeTax() {
  return (salary * 21) / 100;
}

function getSocialFee() {
  return (salary * 4.5) / 100;
}

let netSalary = salary - (incomeTax + penSystmResult);
console.log('Net salary is', netSalary);
