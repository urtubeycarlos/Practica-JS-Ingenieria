QUnit.module( "Tests procesos estandar sobre lista", {
 
  before: function() {
    var lista;
    var res;
  },
 
  beforeEach: function() {
    lista = [1, 2, 3, 8, 9, 10];
  }
 
});


QUnit.test("obtenerParesTest", function(assert){

	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.obtenerPares);
	assert.equal(resultado[0], 2);
	assert.equal(resultado[1], 8);
	assert.equal(resultado[2], 10);

});

QUnit.test("obtenerImparesTest", function(assert){
	
	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.obtenerImpares);
	assert.equal(resultado[0], 1);
	assert.equal(resultado[1], 3);
	assert.equal(resultado[2], 9);

});

QUnit.test("obtenerMinimoTest", function(assert){

	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.obtenerMinimo);
	assert.equal(resultado, 1)

});

QUnit.test("obtenerMaximoTest", function(assert){

	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.obtenerMaximo);
	assert.equal(resultado, 10);

});

QUnit.test("modificarTest", function(assert){

	var res_esperados = [2, 4, 6, 16, 18, 20];
	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.modificar, elem => elem*2);
	
	for (var i = resultado.length - 1; i >= 0; i--)
		assert.equal(resultado[i], res_esperados[i]);

});

QUnit.test("filtrarTest", function(assert){

	var res_esperados = [1, 2, 3];
	resultado = procesarElementosLista(lista, PROCESOS_ESTANDAR.filtrar, elem => elem<4);
	
	for (var i = resultado.length - 1; i >= 0; i--)
		assert.equal(resultado[i], res_esperados[i]);

});

QUnit.test("acumularTest", function(assert){

	var multiplicacion = procesarElementosLista(lista, PROCESOS_ESTANDAR.acumular, (acum, elem) => {
		acum = acum || 1;
		return acum*elem
	});

	var suma = procesarElementosLista(lista, PROCESOS_ESTANDAR.acumular, (acum, elem) => {
		acum = acum || 0;
		return acum + elem
	});

	assert.ok(4320 == multiplicacion);
	assert.ok(33 == suma);

});



