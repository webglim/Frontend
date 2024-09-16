export const formatToTwoDecimalPlaces = (number: any) => {
  if (number == null || isNaN(number)) {
    return "N/A"; // or return an empty string or some other placeholder
  }

  // Convert the number to a float, fix to two decimal places, and add commas
  return parseFloat(number)
    .toFixed(2) // Ensure two decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to thousands
};

export const FormatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
export const addCommasToNumber = (number: any) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
