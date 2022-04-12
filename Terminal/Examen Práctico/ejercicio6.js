let indiceDePunto = cadena.indexOf('.');
if(indiceDePunto < 0)
  return cadena.toUpperCase();
  let inicioHastaPunto = cadena.substring(0, indiceDePunto); 
  let restoDespuesDePunto = cadena.substring(indiceDePunto, cadena.length());
  let inicioHastaPuntoConMayus = inicioHastaPunto.toUpperCase();
