export function formataData(dateString) {

  let parts = dateString.split('/');
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10) - 1; // Os meses em JavaScript são indexados a partir de 0
  let year = parseInt(parts[2], 10);
  const picked = new Date(year, month, day)

  return picked;

}


