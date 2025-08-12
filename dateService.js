// Service 1: DateService (as plain functions)
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

const getCurrentDateTime = () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

const parseDateString = (dateString) => {
    // error created for testing: invalid date format
    const parsed = dayjs(dateString, 'YYYY-MM-DD', false);
    if (!parsed.isValid()) {
        throw new Error('Invalid date format');
    }
    return parsed.format('YYYY-MM-DD');
};

export default {
    getCurrentDateTime,
    parseDateString
};
