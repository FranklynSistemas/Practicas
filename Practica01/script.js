$(function()
{

  $("#btnContarVocales").click(function(event)
    {
      var inPalabra = $("#PalabraV").val();
      var tablaVocales = CuentaVocales(inPalabra);
      var tds = ` <p>Cantidad de Vocales en la Palabra [--><b>${inPalabra}</b><--]</p>
                  <table class="table table-striped">
                  <thead>
                    <tr>
                      <th> Vocal </th>
                      <th> Cantidad </th>
                    </tr>
                    </thead>
                    <tbody>
      `;
      for(num in tablaVocales){
        tds += '<tr>';
        tds += '<td>'+tablaVocales[num][0]+'</td>';
        tds += '<td >'+tablaVocales[num][1]+'</td>';
        tds += '</tr>';
      }
      tds += `</tbody>
              </table>`;
      $("#DatosModal").append(tds);
    });

    $("#btnContarConsonantes").click(function(event)
      {
        var inPalabra = $("#PalabraC").val();
        var tablaConsonantes = CuentaConsonantes (inPalabra);

        var tds = ` <p>Cantidad de Vocales en la Palabra [--><b>${inPalabra}</b><--]</p>
                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th> Consonate </th>
                        <th> Cantidad </th>
                      </tr>
                      </thead>
                      <tbody>
        `;
        for(num in tablaConsonantes){
          tds += '<tr>';
          tds += '<td>'+tablaConsonantes[num][0]+'</td>';
          tds += '<td >'+tablaConsonantes[num][1]+'</td>';
          tds += '</tr>';
        }
        tds += `</tbody>
                </table>`;
        $("#DatosModalConsonantes").append(tds);
      });


          $("#btnNumeroCapicua").click(function(event)
            {
              var inNumero = $("#NumeroCapi").val();
              var Result = numeroCapicua(inNumero);

              var result = `<h3> ${Result}</h3> `;
              $("#DatosModalCapicua").append(result);
            });


function CuentaVocales (Palabra){
var arrayVocales = [["a",0],["e",0],["i",0],["o",0],["u",0]];
var cont = 0;
Palabra = Palabra.toLowerCase();

for (var i = 0; i < Palabra.length; i++) {
  for (var j = 0; j < arrayVocales.length; j++) {
    if(arrayVocales[j][0] === Palabra.charAt(i)){
      arrayVocales[j][1] = arrayVocales[j][1]+1;
    }
  }

}
return arrayVocales;
console.table(arrayVocales);
}

function CuentaConsonantes (Palabra){
    var arrayConsonantes = [["b",0],["c",0],["d",0],["f",0],["g",0],
                          ["j",0],["k",0],["l",0],["m",0],["n",0],
                          ["p",0],["r",0],["s",0],["t", 0],["x",0],["y",0],["z",0]];
    var cont = 0;

    Palabra = Palabra.toLowerCase();

for (var i = 0; i < Palabra.length; i++) {
  for (var j = 0; j < arrayConsonantes.length; j++) {
    if(arrayConsonantes[j][0] === Palabra.charAt(i)){
      arrayConsonantes[j][1] = arrayConsonantes[j][1]+1;
    }
  }

}
return arrayConsonantes;
console.table(arrayConsonantes);
}

function numeroCapicua (valor){
  var numeroAlrevez = [];
  var cont = 0;
  var result = 0, longitud = valor.length;


          for (var i = valor.length-1; i >= 0; i--) {
            numeroAlrevez[cont++] = valor.charAt(i);

    }
      for (var i = 0; i < numeroAlrevez.length; i++) {
        if(numeroAlrevez[i] === valor.charAt(i)){
          result++;
        }
      }

    if (result === longitud) {
      return `El número ${valor}  es capicúa `;
        console.log(`El número ${valor}  es capicúa `);
    }else{
        return `El número ${valor} no es capicúa `;
    }
    console.log(numeroAlrevez);
    console.log(result);
}

    function AreaCirculo(Valor){
      return Area = Math.PI * Math.pow(Valor,2);
}

    function AreaTriangulo(Base, Altura){
      return Area = Base*Altura/2;
}
    function AreaCuadrado(Lado){
      return Area = Lado*Lado;
}

$("#btnCalculaAcirculo").click(function(event)
  {
    var inRadio = $("#Radio").val();
    var Result = `<br> El Área del Circulo es: ${AreaCirculo(inRadio)}`;
    $("#DatosModalAreas").append(Result);
  });

$("#btnCalculaAtriangulo").click(function(event)
  {
    var inBase = $("#Base").val();
    var inAltura = $("#Altura").val();
    var Result = `<br> El Área del Triángulo es: ${AreaTriangulo(inBase,inAltura)}`;
    $("#DatosModalAreas").append(Result);
  });

$("#btnCalculaAcuadrado").click(function(event)
  {
    var inLado = $("#lado").val();
    var Result = `<br> El Área del Cuadrado es: ${AreaCuadrado(inLado)}`;
    $("#DatosModalAreas").append(Result);
  });


});
