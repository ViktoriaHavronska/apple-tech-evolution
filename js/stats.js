// iPhone sales
new Chart(document.getElementById('iphoneChart'), {
    type: 'line',
    data: {
        labels: ['2007', '2010', '2013', '2016', '2019', '2022', '2023'],
        datasets: [{
            label: 'iPhone Sales (Millions)',
            data: [1.4, 40, 150, 211, 187, 225, 235],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// Apple Revenue
new Chart(document.getElementById('revenueChart'), {
    type: 'bar',
    data: {
        labels: ['2015', '2017', '2019', '2021', '2023'],
        datasets: [{
            label: 'Revenue (Billions $)',
            data: [233, 229, 260, 365, 383]
        }]
    }
});

// Mac Sales
new Chart(document.getElementById('macChart'), {
    type: 'line',
    data: {
        labels: ['2015', '2017', '2019', '2021', '2023'],
        datasets: [{
            label: 'Mac Sales (Millions)',
            data: [20, 19, 18, 28, 26],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// Apple Watch growth
new Chart(document.getElementById('watchChart'), {
    type: 'line',
    data: {
        labels: ['2015', '2017', '2019', '2021', '2023'],
        datasets: [{
            label: 'Watch Shipments (Millions)',
            data: [5, 18, 31, 46, 53],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});