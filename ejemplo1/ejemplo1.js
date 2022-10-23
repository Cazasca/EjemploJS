console.log('Hello mundo');
console.log("\n");

let bebidas = ['chocolate', 'jugo', 'aguas'];

for(let item of bebidas){
  console.log(item);
}
console.log("\n");

for(let i = 0; i < bebidas.length; i++) {
  console.log(bebidas[i]);
}
console.log("\n");

bebidas.forEach((item, i) => {
  console.log(item,i);
});
console.log("\n");

bebidas.map(function(item,i){
  console.log(item,i);
})
console.log("\n");

const precios = {};
const resultados = {
	'juan': 100,
	'maria': 88,
	'luis': 91
};
console.log(resultados['juan']);
console.log(resultados.luis);

resultados.pedro = 72;
let nombre = 'azucena';
resultados[nombre] = 102;
console.log(resultados);

delete resultados.maria;
console.log(resultados);

for(key in resultados){
  console.log(key);
}
console.log('\n');

for(let nombre in resultados){
	console.log(nombre + ' tiene ' + resultados[nombre]);
}
