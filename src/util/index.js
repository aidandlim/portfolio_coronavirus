export const timeCalculator = target => {
    const now = new Date();
    const then = new Date(target);

    let time = '';
    if (now.getFullYear() > then.getFullYear()) {
        time += `${now.getFullYear() - then.getFullYear()} year(s) ago`;
    } else if (now.getMonth() > then.getMonth()) {
        time += `${now.getMonth() - then.getMonth()} month(s) ago`;
    } else if (now.getDate() > then.getDate()) {
        time += `${now.getDate() - then.getDate()} day(s) ago`;
    } else if (now.getHours() > then.getHours()) {
        time += `${now.getHours() - then.getHours()} hour(s) ago`;
    } else if (now.getMinutes() > then.getMinutes()) {
        time += `${now.getMinutes() - then.getMinutes()} minute(s) ago`;
    } else if (now.getSeconds() > then.getSeconds()) {
        time += `${now.getSeconds() - then.getSeconds()} second(s) ago`;
    }

    return time;
};

export const getUniqueObjectArray = (array) => {
    return array.filter((item, i) => {
        return (
            array.findIndex((item2, j) => {
                return item.day === item2.day;
            }) === i
        );
    });
};