export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{3})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
    e.target.value = value;
    return e;
  };

  export const convertToNumber = (stateUpdate: any): number => {
    let formatBuyPrice = stateUpdate;
    formatBuyPrice = formatBuyPrice.replace(/,/g, "");
    const buyPrice = parseInt(formatBuyPrice);
    return buyPrice;
  };