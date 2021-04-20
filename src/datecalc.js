import { formatError } from './common.js';
import { diffDates, diffToHTML } from './diffDates.js';
const dateCalcForm = document.getElementById('datecalc')
const dateCalcResult = document.getElementById('datecalc__result')

dateCalcForm.addEventListener('submit', handleCalcDate)

function handleCalcDate(event) {
    event.preventDefault();
    dateCalcResult.innerHTML = '';



    let { firstDate, seconDate } = event.target.elements;
    firstDate = firstDate.value, seconDate = seconDate.value;

    if (firstDate && seconDate)
        dateCalcResult.innerHTML = diffToHTML(diffDates(firstDate, seconDate));
    else dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля')
}