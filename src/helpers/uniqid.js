export function uniqid() {

  let agora = Date.now();
  let parte01 = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = 5;
  let counter = 0;

  while (counter < charactersLength) {
    parte01 += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  const token = agora+parte01;

  return token;

}


