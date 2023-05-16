document.addEventListener('DOMContentLoaded', function() {
    // Масив з даними працівників
    let employees = [
        {id: 1, name: 'Дмитро', age: 23, salary: 400},
        {id: 2, name: 'Петро', age: 25, salary: 500},
        {id: 3, name: 'Василь', age: 23, salary: 500},
        {id: 4, name: 'Микола', age: 30, salary: 1000},
        {id: 5, name: 'Іван', age: 27, salary: 500},
        {id: 6, name: 'Гнат', age: 28, salary: 1000},
    ];

// Створення HTML-структури таблиці
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let headerRow = document.createElement('tr');

// Створення заголовків стовпців таблиці
    let headers = ['id', 'name', 'age', 'salary'];
    headers.forEach(function(headerText) {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

// Додавання заголовків до рядка заголовків таблиці
    thead.appendChild(headerRow);
    table.appendChild(thead);

// Додавання даних працівників до тіла таблиці
    employees.forEach(function(employee) {
        let row = document.createElement('tr');

        Object.keys(employee).forEach(function(key) {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(employee[key]);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

// Додавання таблиці до елементу з id="table-container" на сторінці HTML
    let tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(table);

});
