export const timeCalculator = target => {
    const now = new Date();
    const then = new Date(target);

    let time = '';
    if (now.getFullYear() > then.getFullYear()) {
        time += `${now.getFullYear() - then.getFullYear()} yr`;
    } else if (now.getMonth() > then.getMonth()) {
        time += `${now.getMonth() - then.getMonth()} mn`;
    } else if (now.getDate() > then.getDate()) {
        time += `${now.getDate() - then.getDate()} d`;
    } else if (now.getHours() > then.getHours()) {
        time += `${now.getHours() - then.getHours()} h`;
    } else if (now.getMinutes() > then.getMinutes()) {
        time += `${now.getMinutes() - then.getMinutes()} m`;
    } else if (now.getSeconds() > then.getSeconds()) {
        time += `${now.getSeconds() - then.getSeconds()} s`;
    }

    return time;
};

export const numberFormat = number => {
    if (number === null || number === 0) {
        return '-';
    } else {
        return commaNumber(number);
    }
};

export const percentFormat = (number1, number2) => {
    if (number1 === null || number1 === 0 || number2 === null || number2 === 0) {
        return '-';
    } else {
        return '( ' + ((number1 / number2) * 100).toFixed(3) + '% )';
    }
};

export const commaNumber = number => {
    return number.toString().replace('+', '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getUniqueObjectArray = array => {
    return array.filter((item, i) => {
        return (
            array.findIndex((item2, j) => {
                return item.day === item2.day;
            }) === i
        );
    });
};
