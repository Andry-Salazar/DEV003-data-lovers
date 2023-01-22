// función Ordenar:

export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    if (sortOrder === "ascendente") {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
    } else {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
    }
    return 0;
  });

  return data;
};

// función filtrar:

export const filterData = (data, condition) => {
  return data.filter(condition);
};

// función promedio:

export const computeStats = (data) => {
  let promedio = 0;
  let suma = 0;
  for (let i = 0; i < data.length; i++) {
    suma += data[i];
    promedio =  suma / data.length  
  }
  return promedio;
};