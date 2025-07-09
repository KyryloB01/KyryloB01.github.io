'use strict';

const table = document.createElement('table');
table.setAttribute('class', 'table-fill');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const thMonth = document.createElement('th');
thMonth.setAttribute('class', 'text-left');
thMonth.textContent = 'Month';

const thSales = document.createElement('th');
thSales.setAttribute('class', 'text-left');
thSales.textContent = 'Sales';

headerRow.append(thMonth, thSales);
thead.append(headerRow);

const tbody = document.createElement('tbody');
tbody.setAttribute('class', 'table-hover');

const data = [
  ['January', '$ 50,000.00'],
  ['February', '$ 10,000.00'],
  ['March', '$ 85,000.00'],
  ['April', '$ 56,000.00'],
  ['May', '$ 98,000.00']
];

for (const [month, sales] of data) {
  const row = document.createElement('tr');

  const tdMonth = document.createElement('td');
  tdMonth.setAttribute('class', 'text-left');
  tdMonth.textContent = month;

  const tdSales = document.createElement('td');
  tdSales.setAttribute('class', 'text-left');
  tdSales.textContent = sales;

  row.append(tdMonth, tdSales);
  tbody.append(row);
}

table.append(thead, tbody);

document.body.append(table);
