exports.formatDate = str => {
  const newdate = new Date(str);
  const betterDate = newdate.toString();
  const bestDate = betterDate.slice(0, 28);
  return bestDate;
};
