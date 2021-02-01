"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    expensesUser = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMany = +prompt("Во сколько обойдется?", "");

  

let appData = {
  budget: [money],
  timeData: [time],
  expenses: {
    [expensesUser]: [howMany],
  },
  optionalExpenses: { },
  income: [ ],
  savings: false,
}



let result = 




