export const number2Currency = (value: number, local: string, currency: string) => {
    const formatedValue = new Intl.NumberFormat(local,{
        style: 'currency',
        currency
    });
    
    return formatedValue.format(value);
}