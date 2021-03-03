
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos 

	CARLOS LOPEZ DIVISION G 

*/ 
function mostrar()
{
	//Variable
	var nombre;
	var tipo;
	var precio;
	var unidades;
	var marca;
	var inflamable;

	//Contadores
	var contadorAlcohol = 0;
	var contadorIAC = 0;
	var contadorQUAT = 0;

	//Acumuladores
	var acumuladorAlcohol = 0;
	var acumuladorIAC = 0;
	var acumuladorQUAT = 0;
	var contadorIACBarato = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;
	var acumuladorIgnifugo = 0;
	

	//Promedios
	var promedioIAC;
	var promedioQUAT;
	var promedioAlcohol;
	

	var tipoMasCaro;
	var marcaDelMasCaro;
	var precioMasCaro;
	
	var flag = 0;
	
	


	for (var i = 0; i < 5; i++) {

		do {
			nombre = prompt("Ingrese el nombre del producto");
		} while (isNaN(nombre)==false);

		do {
			tipo = prompt("Que tipo de producto es? (alcohol-quat-iac)")

		} while (tipo != "alcohol" && tipo != "quat" && tipo != "iac");

		do {
			unidades = prompt("Cuantas unidades va a llevar? (entre 1 y 1000)");
			unidades = parseInt(unidades);

		} while (isNaN(unidades) || unidades < 1 || unidades > 1000);
		
		do {
			precio = prompt("Ingrese el precio del producto (entre 100 y 300)");
			precio = parseInt(precio);

		} while (isNaN(precio) || precio < 100 || precio > 300);
		
		do {
			inflamable = prompt("Que tipo de inflamable es? (ignifugo-combustible-explosivo)")
		} while (inflamable != "explosivo" && inflamable != "combustible" && inflamable != "ignifugo");
		
		do {
			marca = prompt("Ingrese la marca del producto");
		} while (isNaN(marca)==false);

		switch (tipo) 
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + unidades;
				break;

			case "iac":
				contadorIAC++;
				acumuladorIAC = acumuladorIAC + unidades;
				if (precio >= 200) {
					contadorIACBarato++;
				}
				break;

			case "quat":
				contadorQUAT++;
				acumuladorQUAT = acumuladorQUAT + unidades;
				break;
		}

		switch (inflamable)
		{
			case "combustible":
				acumuladorCombustible = acumuladorCombustible + unidades;
				break;
			case "ignifugo":
				acumuladorIgnifugo = acumuladorIgnifugo + unidades;
				break;	
			case "explosivo":
				acumuladorExplosivo = acumuladorExplosivo + unidades;
				break;
			
		}
		
		if(flag == 0)
		{
			tipoMasCaro = tipo;
			marcaDelMasCaro = marca;
			precioMasCaro = precio;
			flag++;
		}
		else if (precio > precioMasCaro)
		{
			tipoMasCaro = tipo;
			marcaDelMasCaro = marca;
			precioMasCaro = precio;
		}
	}

	if (contadorAlcohol != 0) 
	{
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		document.write("El promedio de cantidad alcohol es : " + promedioAlcohol + "<br>");
	}
	else if (contadorQUAT != 0) 
	{
		promedioQUAT = acumuladorQUAT / contadorQUAT;
		document.write("El promedio de cantidad QUAT es :" + promedioQUAT + "<br>");
	}
	else if (contadorIAC != 0) 
	{
		promedioIAC = acumuladorIAC / contadorIAC;
		document.write("El promedio de cantidad de IAC es :" + promedioIAC + "<br>");
	}

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo)
	{
		document.write("El tipo de inflamable que tiene mas unidades en la compra es : Ignifugo <br>");
	}
	else if (acumuladorExplosivo > acumuladorCombustible && acumuladorExplosivo > acumuladorIgnifugo) 
	{
		document.write("El tipo de inflamable que tiene mas unidades en la compra es : Explosivo <br>");
	}
	else if (acumuladorCombustible > acumuladorIgnifugo && acumuladorCombustible > acumuladorExplosivo) 
	{
		document.write("El tipo de inflamable que tiene mas unidades en la compra es : Combustible <br>");
	}
	
	if(flag != 0)
	{
		document.write("Del producto mas caro de todos, la marca es : "+marcaDelMasCaro+" y el tipo es : "+tipoMasCaro);
	}
	if(contadorIACBarato != 0){
		document.write("La cantidad de IAC con un precio menor a 200 es de : "+contadorIACBarato+"<br>");
	}

}