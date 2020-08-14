class UI {
    constructor() {
        this.tableBody = document.getElementById('table-body');
        this.minRangeInput = document.getElementById('min-range');
        this.maxRangeInput = document.getElementById('max-range');
        this.modalButton = document.getElementById('submit-modal');
        this.modalClose = document.getElementById('close-modal');
        this.selectRangeButton = document.getElementById('select-range');
        this.modalContent = document.querySelector('.modal-content');
        this.modalBody = document.querySelector('.modal-body');
        this.alert = document.getElementById('modalAlert');
    }

    addToUI(data) {
        this.tableBody.innerHTML = '';
        let output = '',
            coinClass24h = '',
            coinClass1h = '';
        
        data.forEach(coin => {
            if (coin.percent_change_24h >= 0) {
                coinClass24h = 'text-success';
            }
            else {
                coinClass24h = 'text-danger';
            }
            if (coin.percent_change_1h >= 0) {
                coinClass1h = 'text-success';
            }
            else {
                coinClass1h = 'text-danger';
            }

            output += 
            `
            <tr>
                <td><strong>${coin.rank}</strong></td>
                <td><strong>${coin.symbol}</strong></td>
                <td>${coin.name}</td>
                <td><strong>${coin.price_usd}</strong></td>
                <td class="${coinClass24h}"><strong>${coin.percent_change_24h}%</strong></td>
                <td class="${coinClass1h}"><strong>${coin.percent_change_1h}%</strong></td>
            </tr>
            `
        });

        this.tableBody.innerHTML = output;
    }
}
