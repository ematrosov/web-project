import { DateTime } from './luxon.js';

export function diffDates(firstDate, seconDate) {
    firstDate = DateTime.fromISO(firstDate);
    seconDate = DateTime.fromISO(seconDate);

    if (firstDate > seconDate)
        [firstDate, seconDate] = [seconDate, firstDate];


    return seconDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHTML = diff => `
    <span>
        Лет: ${diff.years},
        Месяцев: ${diff.months},
        Дней: ${diff.days},
    </span>

`