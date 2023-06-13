interface CurrencyFormatOptions {
  value: number;
  currency?: string;
  format?: string;
  minFractionDigits?: number;
  thousandsSeparator?: string;
}

export const DivisaFormater = ({
  value,
  currency = "COP",
  format = "es-CO",
  minFractionDigits = 0,
  thousandsSeparator = ".",
}: CurrencyFormatOptions) => {
  const formatter = new Intl.NumberFormat(format, {
    style: "currency",
    currency,
    minimumFractionDigits: minFractionDigits,
    useGrouping: true,
  });

  const formattedValue = formatter.format(value);
  return formattedValue.replace(",", thousandsSeparator);
};

export const DivisaFormater2 = (value: number) => {
  const formaterMoney = Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return formaterMoney.format(value);
};
