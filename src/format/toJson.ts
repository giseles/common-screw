export const toJson = (data: any) => {
    return Object.keys(data).map(key => ({ value: key, text: data[key] }));
};