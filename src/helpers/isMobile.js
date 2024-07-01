export function isMobile() {

  const userAgent = navigator.userAgent;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return (isMobile) ? true : false;

}


