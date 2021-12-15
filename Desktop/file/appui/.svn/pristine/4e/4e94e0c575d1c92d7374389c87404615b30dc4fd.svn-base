import moment from 'moment';
export function dateFormatter(date, type) {    //type 1、年月日
    if (!date) {
        return '';
    }
    let ftype = 'YYYY-MM-DD';
    if (type === '2') {
        ftype += ' HH:mm';
    }
    return moment(date).format(ftype);
}