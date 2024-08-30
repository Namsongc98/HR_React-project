export const getAllHoursInDay = () => {
    const hoursArray = [];
    for (let hour = 0; hour < 24; hour++) {
        hoursArray.push({ id: hour, label: hour, value: hour });
    }
    return hoursArray;
};
export const getAllMinutesInHour = () => {
    const minutesArray = [];
    for (let minute = 0; minute < 60; minute++) {
        minutesArray.push({ id: minute, label: minute, value: minute });
    }
    return minutesArray;
};

export const createComboboxProps = (label, placeholder, value, name, listDataCombobox, onChange) => ({
    label,
    placeholder,
    value,
    name,
    listDataCombobox,
    onChange
})
export const createDateProp = (label, value, defaultValue, name, onChange) => ({
    label,
    value,
    defaultValue,
    name,
    onChange,
});
export const createInputTextProp = (label,
    placeholder,
    type,
    value,
    name,
    onChange,) => ({
        label,
        placeholder,
        type,
        value,
        name,
        onChange,
    });
export const createTextareaProp = (label,
    placeholder,
    rows,
    cols,
    name,
    value,
    onChange) => ({
        label,
        placeholder,
        rows,
        cols,
        name,
        value,
        onChange,
    });
export const btnProp = (label, styleBtn, onClick) => ({ label, styleBtn, onClick });

export const modalProp = (open, title, onClick) => ({ open, title, onClick });
