function filterCSV(csv, filterList) {
  return csv.filter((line) => {
    return !filterList.includes(line[0]);
  });
}

export default filterCSV;
