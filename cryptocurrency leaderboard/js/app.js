const crypto = new Crypto();
const ui = new UI();

function checkForModal() {
    ui.modalButton.addEventListener('click', getInput);
}

function getInput() {
    const min = ui.minRangeInput.value;
    const max = ui.maxRangeInput.value;

    if ((min === '' || max === '') || (min <= 0 || max <= 0) || (min > max) || max > 100) {
        const div = document.createElement('div');
        div.setAttribute('class', 'alert alert-danger');
        div.textContent = 'The numbers must be between 1 and 100.';
        ui.modalContent.insertBefore(div, ui.modalBody);
        setTimeout(() => {
            div.remove();
        }, 3000);
        return;
    }

    ui.modalClose.click();
    ui.minRangeInput.value = '';
    ui.maxRangeInput.value = '';
    crypto.getData(min, max)
        .then(data => {
            ui.addToUI(data);
        });
}

ui.selectRangeButton.addEventListener('click', checkForModal);
