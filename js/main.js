var PROCESOS_ESTANDAR = {

	obtenerMaximo : (elem, max) => {
		if( max == undefined || max <= elem )
			max = elem;
		return max;
	},

	obtenerMinimo : (elem, min) => {
		if( min == undefined || min >= elem )
			min = elem;
		return min;
	},

	obtenerPares : (elem, lista) => {
		lista = lista || [];
		if( elem % 2 == 0 )
			lista.push(elem);
		return lista;
	},

	obtenerImpares : (elem, lista) => {
		lista = lista || [];
		if( elem % 2 != 0 )
			lista.push(elem);
		return lista;
	},
 
	modificar : (elem, lista, operacion) => {
		lista = lista || [];
		lista.push( operacion(elem) );
		return lista;
	},

	acumular : (elem, acum, operacion) => {
		acum = operacion(acum, elem);
		return acum;
	},

	filtrar : (elem, lista, condicion) => {
		lista = lista || [];
		if( condicion(elem) )
			lista.push(elem);
		return lista;
	}  

}


function procesarElementosLista(lista, proceso, operacion_adicional){
	
	var ret;
	lista.forEach( elem => {
		ret = proceso(elem, ret, operacion_adicional);
	});
	return ret;

}