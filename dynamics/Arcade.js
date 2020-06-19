var bod = document.getElementsByTagName("body");
var colCo = document.cookie;
if (colCo=="")
  colCo = "colCoo=#333333";
var colVa = colCo.substr(7);
if (colVa == "#333333"){
  bod[0].id="f1";
}
else if (colVa=="#292733") {
  bod[0].id="f2";
}
else if (colVa=="#FFFFFFF") {
  bod[0].id="f3";
}
else {
  bod[0].id="f4";
}
function colIn(){
  var bod = document.getElementsByTagName("body");
  var colo = document.getElementsByTagName("input");
  colo[0].addEventListener('input', color);
  function color(e){
    if (e.srcElement.value == "#333333"){
      bod[0].id="f1";
    }
    else if (e.srcElement.value == "#292733"){
      bod[0].id="f2";
    }
    else if (e.srcElement.value == "#FFFFFF"){
      bod[0].id="f3";
    }
    else {
      bod[0].id="f4";
    }
    document.cookie = "colCoo="+e.srcElement.value;
  }
}
function inicio()
{
  let bod = document.getElementsByTagName("body");
  bod[0].innerHTML =
    '<navbar class="navbar navbar-nav" style="background-color: #595959"><ul class="list-group list-group-horizontal"><li class="list-group-item active" id="ini">Inicio</li><li class="list-group-item list-group-item-action" id="bM">Busca Minas</li><li class="list-group-item list-group-item-action" id="j2">2048</li><li class="list-group-item list-group-item-action" id="Aho">Ahorcado</li><li class="list-group-item list-group-item-action">Color <input type="color" value="' +
    colVa +
    '" list="colf"></li></ul></navbar><datalist id="colf"><!--Son los colores que se van a mostrar!--><option value="#333333"><option value="#292733"><option value="#FFFFFF"><option value="#808080">';
  colIn();
  bod = document.getElementsByTagName("body");
  var grid = document.createElement("div");
  grid.id = "grid";
  for (i=0; i<2; i++){
    var emp = document.createElement("div");
    grid.appendChild(emp);
  }
  var bot1 = document.createElement("div");
  bot1.innerHTML="<center><button>Busca Minas</button></center>";
  var emp = document.createElement("div");
  grid.appendChild(emp);
  var bot2 = document.createElement("div");
  bot2.innerHTML="<center><button>2048</button></center>";
  var bot3 = document.createElement("div");
  bot3.innerHTML="<center><button>Tetris</button></center>";
  bot1.addEventListener('click', function(e) {
    buscaM();
  });
  bot2.addEventListener("click",function(e){
    j2048();
  });
  grid.appendChild(bot1);
  grid.appendChild(bot2);
  grid.appendChild(bot3);
  for (i=0; i<4; i++){
    var emp = document.createElement("div");
    grid.appendChild(emp);
  }
  var logo = document.createElement("div");
  logo.innerHTML = '<img src="../statics/img/Logo.png" id="logo">';
  grid.appendChild(logo);
  bod[0].appendChild(grid);
  botBm = document.getElementById("bM");
  botBm.addEventListener('click', function(e) {
    buscaM();
  });
  botj2 = document.getElementById("j2");
  botj2.addEventListener('click', function(e) {
    j2048();
  });
  botAho = document.getElementById("Aho");
  botAho.addEventListener('click', function(e) {
    ahorcado();
  });
}
function buscaM(){
  let bod = document.getElementsByTagName("body");
  bod[0].innerHTML =
    '<navbar class="navbar navbar-nav" style="background-color: #595959"><ul class="list-group list-group-horizontal"><li class="list-group-item list-group-item-action" id="ini">Inicio</li><li class="list-group-item  active" id="bM">Busca Minas</li><li class="list-group-item list-group-item-action" id="j2">2048</li><li class="list-group-item list-group-item-action" id="Aho">Ahorcado</li><li class="list-group-item list-group-item-action">Color <input type="color" value="' +
    colVa +
    '" list="colf"></li></ul></navbar><datalist id="colf"><!--Son los colores que se van a mostrar!--><option value="#333333"><option value="#292733"><option value="#FFFFFF"><option value="#808080">';
  bod[0].innerHTML+='<div class="container"><div class="grid"></div><div>Banderas restantes: <span id="flags-left"></span></div><div id="result"></div></div>';
  colIn();
  botIni = document.getElementById("ini");
  botIni.addEventListener('click', function(e) {
    inicio();
  });
  botj2 = document.getElementById("j2");
  botj2.addEventListener('click', function(e) {
    j2048();
  });
  botAho = document.getElementById("Aho");
  botAho.addEventListener('click', function(e) {
    ahorcado();
  });
  const grid = document.querySelector('.grid');//Elige elementos con la clase grid del CSS
  const flagsLeft = document.querySelector('#flags-left');
  const result = document.querySelector('#result');
  let width = 10;
  let bombAmount = 20;//Cantidad de bombas en el juego
  let flags = 0;//Inicializa las banderas en cero
  let squares = [];
  let isGameOver = false;//Checa que el usuario no haya perdido

  //Crea el tablero
  function createBoard() {
    flagsLeft.innerHTML = bombAmount;//Muestra en pantalla la cantidad de banderas que tiene el usuario

    //Coloca bombas aleatorias
    const bombsArray = Array(bombAmount).fill('bomb');//Llena el arreglo de bombas
    const emptyArray = Array(width*width - bombAmount).fill('valid');//Los que no tienen bombas
    const gameArray = emptyArray.concat(bombsArray);//Los junta
    const shuffledArray = gameArray.sort(() => Math.random() -0.5);//Ordena el arreglo de forma aleatoria

    for( i = 0; i < width*width; i++) {//Va a crear los cuadrados dependiendo del tamaño del tablero
      const square = document.createElement('div');//
      square.id = i;//Le asigna el id al cuadrado
      square.classList.add(shuffledArray[i]);//Le mete la clase correspondiente
      grid.appendChild(square);//Agrega el cuadro, al div de la clase grid
      squares.push(square);//Guarda el cuadro en el arreglo squares

      //Click izquierdo
      square.addEventListener('click', function(e) {//Agrega un event listener a todos los cuadros
        click(square);//Llama a la función click y le envía el valor de cuadrado
      })

      //Click derecho
      square.oncontextmenu = function(e) {
        e.preventDefault();//Pusimos esta función, que evitar que con el click derecho se muestre el menú del navegador
        addFlag(square);//Llama a la función que arega banderas, y le manda el cuadrado
      }
    }

    //Crea los números
    for ( i = 0; i < squares.length; i++) {//Lo va a hacer el número de veces que tenga elementos squares
      let total = 0;
      var isLeftEdge = false;
      var isRightEdge = false;
      if (i%width==0)//Checa si está a la izquierda deel tablero
      {
        isLeftEdge = true;
      }
      if (i%width== width-1)//Checa si está a la derecha
      {
        isRightEdge = true;
      }
      if (squares[i].classList.contains('valid')) {//Si no es una bomba
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) //Revisa el total de bombas
          total ++;
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb'))
          total ++;
        if (i > 10 && squares[i -width].classList.contains('bomb'))
          total ++;
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb'))
          total ++;
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb'))
          total ++;
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb'))
          total ++;
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb'))
          total ++;
        if (i < 89 && squares[i +width].classList.contains('bomb'))
          total ++;
        squares[i].setAttribute('data', total);//Guarda el total de bombas en data
      }
    }
    var aside = document.createElement("aside");
    aside.innerHTML = "<br><br><br>Instrucciones: Da click en un cuadro para revelar su contenido. Click derecho para marcarlo como potencial bomba. Los números te dice cuántas minas está tocando. Encuentra todos los explosivos (sin detonarlos), y ganarás el juego";
    grid.appendChild(aside);
  }
  createBoard()//Llama a la función recién creada

  //Para agregar las banderas
  function addFlag(square) {
    if (isGameOver)
      return;
    if (!square.classList.contains('checked') && (flags < bombAmount)) {//Si no está abierto, y aún hay banderas disponibles
      if (!square.classList.contains('flag')) {//Si no tiene banderas
        square.classList.add('flag');
        square.innerHTML = " 🚩";//Emoji de bandera
        flags ++; //Aumentan las banderas en uso
        flagsLeft.innerHTML = bombAmount- flags; //Disminuyen las banderas disponibles
        checkForWin();
      } else {
        square.classList.remove('flag');//Quita la bandera si se hace click en un cuadro que ya tenía
        square.innerHTML = '';
        flags --;
        flagsLeft.innerHTML = bombAmount- flags;
      }
    }
  }

  //Lo que va a hacer con el click izquierdo
  function click(square) {
    let currentId = square.id;//Guarda el id en una variable
    if (isGameOver)
      return;//Si se ha acabado el juego, no hace nada
    if (square.classList.contains('checked') || square.classList.contains('flag'))
      return;//Si el cuadro ya está abierto o tiene bandera, no hace nada
    if (square.classList.contains('bomb')) {
      gameOver(square);//Termina el juego si hay una bomba
    }
    else {
      let total = square.getAttribute('data')//Recibe lo que guardamos en data
      if (total !=0) {
        square.classList.add('checked')//Abre el cuadro
        if (total == 1)
          square.classList.add('one');//Usa las clases del css
        if (total == 2)
          square.classList.add('two');
        if (total == 3)
          square.classList.add('three');
        if (total == 4)
          square.classList.add('four');
        square.innerHTML = total;//Coloca el número en el cuadro
        return;
      }
      checkSquare(square, currentId);//Manda los valores de square y del id, a la función que revisa bombas vecinas
    }
    square.classList.add('checked');//Agrega la clase
  }


  //Revisa cuadros vecinos
  function checkSquare(square, currentId) {
    var isLeftEdge = false;
    var isRightEdge = false;
    if (currentId%width==0)
    {
      isLeftEdge= true;
    }
    if (currentId%width==width-1)
    {
      isRightEdge = true;
    }
    setTimeout(() => {//Llama a lo siguiente, después de 10ms
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1].id;//Lo hace número
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 -width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId -width)].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 -width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 +width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 +width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) +width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
    }, 10);
  }

  //Fin del jueo
  function gameOver(square) {
    result.innerHTML = 'BOOM! Perdiste 😭!';
    isGameOver = true;//En todo el código, si esta variable es verdadera, el usuario no podrá hacer más

    //Al perder, muestra todas las bombas
    squares.forEach(square => {//Por cada elemento del arreglo
      if (square.classList.contains('bomb')) {
        square.innerHTML = '💣';
        square.classList.remove('bomb');
        square.classList.add('checked');
      }
    })
  }

  //Para ganar
  function checkForWin() {
  let matches = 0

    for (i = 0; i < squares.length; i++) {
      if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {//Si el usuario coloca una bandera en donde sí hay una bomba, aumentará la variable
        matches ++;
      }
      if (matches === bombAmount) {//En cuanto el usuario haya encontrado todas las bombas, será ganador
        result.innerHTML = '¡Ganaste! 😎';
        isGameOver = true;//Termina el juego
      }
    }
  }
}
function j2048(){
  let bod = document.getElementsByTagName("body");
  bod[0].innerHTML =
    '<navbar class="navbar navbar-nav" style="background-color: #595959"><ul class="list-group list-group-horizontal"><li class="list-group-item list-group-item-action " id="ini">Inicio</li><li class="list-group-item  list-group-item-action" id="bM">Busca Minas</li><li class="list-group-item  active" id="j2">2048</li><li class="list-group-item list-group-item-action" id="Aho">Ahorcado</li><li class="list-group-item list-group-item-action">Color <input type="color" value="' +
    colVa +
    '" list="colf"></li></ul></navbar><datalist id="colf"><!--Son los colores que se van a mostrar!--><option value="#333333"><option value="#292733"><option value="#FFFFFF"><option value="#808080">';//Colocamos el navbar de la página inicial, con modificaciones
  bod[0].innerHTML+='<div class="scConten"><div class="scTi">Puntaje</div><span id="score">0</span></div><div id="result"></div><div class="reja"></div>';//Añadimos el grid para el juego
  colIn();
  botIni = document.getElementById("ini");//Obtenemos el botón de inicio
  botIni.addEventListener('click', function(e) {//Al darle click, se irá a la sección de inicio
    inicio();
  });
  botBm = document.getElementById("bM");//El botón del buscaminas
  botBm.addEventListener('click', function(e) {
    buscaM();
  });
  botAho = document.getElementById("Aho");
  botAho.addEventListener('click', function(e) {
    ahorcado();
  });
  const gridDisplay = document.querySelector(".reja");//Obtenemos el grid
  const scoreDisplay = document.getElementById("score");//Obtenemos la sección de la puntuación
  const resultDisplay = document.getElementById("result");//Obtenemos la sección del resultado final
  const width=4;//Tamaño del tablero
  let squares = []//Arreglo en el que se guardan los cuadros existentes
  let score=0;//Inicializamos en cero
  //Crea tablero
  function board2048(){
    for (i=0; i<width*width; i++)//Hasta que se llene
    {
      square= document.createElement("div");//Creamos un cuadro
      square.innerHTML=0; //El valor cero, representará a los cuadros inexistentes en el juego
      gridDisplay.appendChild(square);//Agregamos el cuadro al grid
      squares.push(square);//Agregamos el cuadro al arreglo
    }
    var aside = document.createElement("aside");//Creamos un aside para el instructivo
    aside.innerText = "Instrucciones: Utilizando las flechas, mezcla los números que sean iguales. Ganas cuando llegues a 2048, pierdes cuando llenes el espacio.";
    gridDisplay.appendChild(aside);//Agregamos el aside
    generar();//Llamamos a la funcón generar 2 veces, ya que cuando inicie el juego, queremos que hayan 2 números
    generar();
  }
  board2048();//Creamos el tablero

  //Generar número de forma aleatoria
  function generar(){

    numAl = Math.floor(Math.random()*squares.length);//Obtenemos el cuadro al que le vamos a meter un número nuevo
    if (squares[numAl].innerHTML==0){//Validamos que sea igual a cero, para evitar que nos asigne números donde ya los hay
      squares[numAl].innerHTML=2;//Ponemos un 2
      for (i=0; i<16; i++){//Para que los ceros sean invisibles, si son iguales a cero, se les aplicará cierto estilo del CSS
        if (squares[i].innerHTML==0){
          squares[i].id="cero";
        }
        else{//Si no, sí serán visibles
          squares[i].id="";
        }
      }
      perder();//Revisa si perdió
    }
    else{
      generar();//Si no es igual a cero, lo intenta de nuevo
    }
  }

  //Mover A la derecha
  function moveRight(){
    for (i=0; i<16; i++)//Checa todos los cuadros
    {
      if (i%4===0){//Si es una fila nueva
        let totalOne = squares[i].innerHTML;//Guardamos los valores de esa fila en variables
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalFour = squares[i+3].innerHTML;
        let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];//Lo hacemos un arreglo de enteros

        let filteredRow = row.filter(num => num);//Esta función filtra los números

        let restante = 4 - filteredRow.length;//Los que no sean números
        let ceros = Array(restante).fill(0);//Llenamos los vacíos con ceros

        let nueFil = ceros.concat(filteredRow);//Ponemos primero los ceros y después los números, así se van a la derecha

        squares[i].innerHTML = nueFil[0];//Lo replicamos en el grid
        squares[i+1].innerHTML = nueFil[1];
        squares[i+2].innerHTML = nueFil[2];
        squares[i+3].innerHTML = nueFil[3];
      }
    }
  }

  //Mover A la Izquierda
  function moveLeft(){
    for (i=0; i<16; i++)
    {
      if (i%4===0){
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalFour = squares[i+3].innerHTML;
        let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

        let filteredRow = row.filter(num => num);

        let restante = 4 - filteredRow.length;
        let ceros = Array(restante).fill(0);

        let nueFil = filteredRow.concat(ceros);//Para que sea hacia la izquierda, primero van los números y después los ceros

        squares[i].innerHTML = nueFil[0];
        squares[i+1].innerHTML = nueFil[1];
        squares[i+2].innerHTML = nueFil[2];
        squares[i+3].innerHTML = nueFil[3];
      }
    }
  }
  //Mover hacia abajo
  function moveDown(){
    for (i=0; i<4; i++){//4 columnas
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i+width].innerHTML;//Aplicamos el mismo método que los movimientos horizontales, solo que ahora sumando el tamaño en vez de 1
      let totalThree = squares[i+(2*width)].innerHTML;
      let totalFour = squares[i+(3*width)].innerHTML;
      let columna = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      let filteredColumn = columna.filter(num => num);
      let restante = 4 - filteredColumn.length;
      let ceros = Array(restante).fill(0);

      let nueCol = ceros.concat(filteredColumn);

      squares[i].innerHTML = nueCol[0];
      squares[i+width].innerHTML = nueCol[1];
      squares[i+(2*width)].innerHTML = nueCol[2];
      squares[i+(3*width)].innerHTML = nueCol[3];
    }
  }
  //Mover hacia arriba
  function moveUp(){
    for (i=0; i<4; i++){
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i+width].innerHTML;
      let totalThree = squares[i+(2*width)].innerHTML;
      let totalFour = squares[i+(3*width)].innerHTML;
      let columna = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      let filteredColumn = columna.filter(num => num);
      let restante = 4 - filteredColumn.length;
      let ceros = Array(restante).fill(0);

      let nueCol = filteredColumn.concat(ceros);

      squares[i].innerHTML = nueCol[0];
      squares[i+width].innerHTML = nueCol[1];
      squares[i+(2*width)].innerHTML = nueCol[2];
      squares[i+(3*width)].innerHTML = nueCol[3];
    }
  }
  //Combinar FILAS
  function combineRow(){
    for (i=0; i<15; i++){//Menor a 15, para no checar los cuadros al lado de la orilla
      if (squares[i].innerHTML===squares[i+1].innerHTML){//Si son iguales, se podrán combinar
        let totalCom = parseInt(squares[i].innerHTML)+parseInt(squares[i+1].innerHTML)//Se hace la suma
        squares[i].innerHTML=totalCom;//Se pasa la suma al cuadro

        squares[i+1].innerHTML=0;//Se hace cero el cuadro anterior
        score+= totalCom;//Sumamos el score
        scoreDisplay.innerHTML = score;//Lo ponemos en pantalla
      }
    }
    ganar2048();//Revisamos si ya ganó el usuario
  }
  //Combinar COLUMNAS
  function combineColumn(){
    for (i=0; i<12; i++){//Lo mismo, pero ahora con width
      if (squares[i].innerHTML===squares[i+width].innerHTML){
        let totalCom = parseInt(squares[i].innerHTML)+parseInt(squares[i+width].innerHTML)
        squares[i].innerHTML=totalCom;

        squares[i+width].innerHTML=0;
        score+= totalCom;
        scoreDisplay.innerHTML = score;
      }
    }
    ganar2048();
  }
  //Teclas
  function control(e){//Checamos el movimiento del usuario
    if (e.keyCode==39){//Tecla derecha
      keyDer();
    }
    else if (e.keyCode==37) {//Tecla izquierda
      keyIz();
    }
    else if (e.keyCode==38) {//Flecha arriba
      keyUp();
    }
    else if (e.keyCode==40) {//Flecha abajo
      keyDown();
    }
  }
  document.addEventListener('keyup', control);//Añadimos el event listener para los movimientos
  function keyDer(){//Se mueve, se combinan, vuelve a moverse, y genera uno nuevo
    moveRight();
    combineRow();
    moveRight();
    generar();
  }
  function keyIz(){
    moveLeft();
    combineRow();
    moveLeft();
    generar();
  }
  function keyDown(){
    moveDown();
    combineColumn();
    moveDown();
    generar();
  }
  function keyUp(){
    moveUp();
    combineColumn();
    moveUp();
    generar();
  }
  //Revisar la victoria
  function ganar2048(){
    for (i=0; i< squares.length; i++)
    {
      if (squares[i].innerHTML==2048){//Si llega a 2048, el usuario gana
        resultDisplay.innerHTML = "¡Ganaste! 🤩";
        document.removeEventListener("keyup",control);//Evitamos más movimientos
      }
    }
  }
  function perder(){
    let zeros=0;//Checamos cuantos ceros hay
    for (let i=0; i<squares.length; i++)
    {
      if (squares[i].innerHTML==0)
      {
        zeros++;
      }
    }
    if (zeros===0)//Si ya no quedan ceros (espacios vacíos), el usuario ha perdido
    {
      resultDisplay.innerHTML = "Perdiste 🤐";
      document.removeEventListener("keyup",control);
    }
  }
}
function ahorcado(){
  bod = document.getElementsByTagName("body");
  bod[0].innerHTML =
    '<navbar class="navbar navbar-nav" style="background-color: #595959"><ul class="list-group list-group-horizontal"><li class="list-group-item list-group-item-action" id="ini">Inicio</li><li class="list-group-item  list-group-item-action" id="bM">Busca Minas</li><li class="list-group-item list-group-item-action" id="j2">2048</li><li class="list-group-item  active" id="Aho">Ahorcado</li><li class="list-group-item list-group-item-action">Color <input type="color" value="' +
    colVa +
    '" list="colf"></li></ul></navbar><datalist id="colf"><!--Son los colores que se van a mostrar!--><option value="#333333"><option value="#292733"><option value="#FFFFFF"><option value="#808080">';
  bod[0].innerHTML+='<h1>Ahorcado</h1><canvas id="pantalla" width="960px" height="450px"> <!-- etiqueta del canvas con sus medidas en la pantalla -->Tu navegador no soporta Canvas.</canvas>';
  colIn();
  botIni = document.getElementById("ini");//Obtenemos el botón de inicio
  botIni.addEventListener('click', function(e) {//Al darle click, se irá a la sección de inicio
    inicio();
  });
  botBm = document.getElementById("bM");
  botBm.addEventListener('click', function(e) {
    buscaM();
  });
  botj2 = document.getElementById("j2");
  botj2.addEventListener('click', function(e) {
    j2048();
  });
  botAho = document.getElementById("Aho");
  botAho.addEventListener('click', function(e) {
    ahorcado();
  });
  var ctx;
  var canvas;
  var palabra;
  var letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
  var colorTecla = "#585858";
  var colorMargen = "#494949";
  var inicioX = 200;
  var inicioY = 300;
  var lon = 35;
  var margen = 20;
  var pistaText = "";

  var teclas_array = new Array();
  var letras_array = new Array();
  var palabras_array = new Array();

  var aciertos = 0;
  var errores = 0;

  //  Palabras a usar. Pueden cambiarse sin problema
  palabras_array.push("EQUIPO");
  palabras_array.push("CHAFA");
  palabras_array.push("TRAICION");
  palabras_array.push("EMERGENCIA");
  palabras_array.push("AGUA");
  palabras_array.push("SAL");
  palabras_array.push("AZCUCAR");
  palabras_array.push("SERPIENTE");
  palabras_array.push("VAMPIRO");
  palabras_array.push("HTML");
  palabras_array.push("PHP");
  palabras_array.push("CSS");
  palabras_array.push("REFRESCO");
  palabras_array.push("RISAS");
  palabras_array.push("MOUSE");
  //Para las teclas
  function Tecla(x, y, ancho, alto, letra){
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.letra = letra;
      this.dibuja = dibujaTecla;
  }
  //Para las letras del ahorcado
  function Letra(x, y, ancho, alto, letra){
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.letra = letra;
      this.dibuja = dibujaCajaLetra;
      this.dibujaLetra = dibujaLetraLetra;
  }

  // Dibujar Teclas
  function dibujaTecla(){
      ctx.fillStyle = colorTecla;
      ctx.strokeStyle = colorMargen;
      ctx.fillRect(this.x, this.y, this.ancho, this.alto);
      ctx.strokeRect(this.x, this.y, this.ancho, this.alto);

      ctx.fillStyle = "white";
      ctx.font = "bold 20px courier";
      ctx.fillText(this.letra, this.x+this.ancho/2-5, this.y+this.alto/2+5);
  }

  // Dibua la letra
  function dibujaLetraLetra(){
      var w = this.ancho;
      var h = this.alto;
      ctx.fillStyle = "black";
      ctx.font = "bold 40px Courier";
      ctx.fillText(this.letra, this.x+w/2-12, this.y+h/2+14);
  }
  //Dibuja la caja de la letra
  function dibujaCajaLetra(){
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.fillRect(this.x, this.y, this.ancho, this.alto);
      ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
  }

  /* Distribuir nuestro teclado con sus letras respectivas al acomodo de nuestro array */
  function teclado(){
      var ren = 0;
      var col = 0;
      var letra = "";
      var miLetra;
      var x = inicioX;
      var y = inicioY;
      for(var i = 0; i < letras.length; i++){
          letra = letras.substr(i,1);
          miLetra = new Tecla(x, y, lon, lon, letra);
          miLetra.dibuja();
          teclas_array.push(miLetra);
          x += lon + margen;
          col++;
          if(col==10){
              col = 0;
              ren++;
              if(ren==2){
                  x = 280;
              } else {
                  x = inicioX;
              }
          }
          y = inicioY + ren * 50;
      }
  }


  //Obtenemos la palabra de forma aleatoria y la ordenamos
  function pintaPalabra(){
      var p = Math.floor(Math.random()*palabras_array.length);
      palabra = palabras_array[p];

      var w = canvas.width;
      var len = palabra.length;
      var ren = 0;
      var col = 0;
      var y = 230;
      var lon = 50;
      var x = (w - (lon+margen) *len)/2;
      for(var i=0; i<palabra.length; i++){
          letra = palabra.substr(i,1);
          miLetra = new Letra(x, y, lon, lon, letra);
          miLetra.dibuja();
          letras_array.push(miLetra);
          x += lon + margen;
      }
  }

  //Esta función nos pone las imágenes del ahorcado
  function horca(errores){
      var imagen = new Image();
      imagen.src = "../statics/img/ahorcado"+errores+".png";//Las imágenes en la carpeta están por números. Por ejemplo: ahorcado0.png
      imagen.onload = function(){//Una vez que cargue, se pone en el canvas
          ctx.drawImage(imagen, 390, 0, 230, 230);
      }
  }

  //Ajusta las coordenadas
  function ajusta(xx, yy){
      var posCanvas = canvas.getBoundingClientRect();
      var x = xx-posCanvas.left;
      var y = yy-posCanvas.top;
      return{x:x, y:y}
  }

  //Recibe el evento click para actuar
  function selecciona(e){
      var pos = ajusta(e.clientX, e.clientY);
      var x = pos.x;
      var y = pos.y;
      var tecla;
      var bandera = false;
      for (var i = 0; i < teclas_array.length; i++){
          tecla = teclas_array[i];
          if (tecla.x > 0){
              if ((x > tecla.x) && (x < tecla.x + tecla.ancho) && (y > tecla.y) && (y < tecla.y + tecla.alto)){
                  break;
              }
          }
      }
      if (i < teclas_array.length){
          for (var i = 0 ; i < palabra.length ; i++){
              letra = palabra.substr(i, 1);
              if (letra == tecla.letra){ //Aquí checamos si la letra es correcta
                  caja = letras_array[i];
                  caja.dibujaLetra();
                  aciertos++;
                  bandera = true;
              }
          }
          if (bandera == false){ //Al no serla, aumentamos errores.
              errores++;
              horca(errores);
              if (errores == 5)
                gameOver(errores);//Función que termina el juego
          }
          //Aquí borramos la letra que ya se usó
          ctx.clearRect(tecla.x - 1, tecla.y - 1, tecla.ancho + 2, tecla.alto + 2);
          tecla.x - 1;
          //Revisamos si ganó.
          if (aciertos == palabra.length)
            gameOver(errores);
      }
  }

  //Función del fin del juego
  function gameOver(errores){
      ctx.clearRect(0, 0, canvas.width, canvas.height);//Borra el contenido
      ctx.fillStyle = "black";

      ctx.font = "bold 50px Courier";
      if (errores < 5){
          ctx.fillText("Muy bien, la palabra es: ", 110, 280);//Si tiene menos de 5 errores, y está en esta función, es porque ganó
      } else {
          ctx.fillText("Lo sentimos, la palabra era: ", 110, 280);//Perdió
      }

      ctx.font = "bold 80px Courier";
      lon = (canvas.width - (palabra.length*48))/2;
      ctx.fillText(palabra, lon, 380);
      horca(errores);
  }
  //Obtenemos el canvas
  canvas = document.getElementById("pantalla");
  if (canvas && canvas.getContext){//Checa que todo esté bien
      ctx = canvas.getContext("2d");
      if(ctx){
          teclado();//Primero hacemos el teclado
          pintaPalabra();//Después la palabra
          horca(errores);//Enviamos los errores a la función horca
          canvas.addEventListener("click", selecciona, false);//
      } else {
          bod[0].innerHTML+="Error al cargar el contexto!";//Si algo malo pasa, muestra un error
      }
  }
}
var audio = new Audio("../statics/audio/theme.mp3");//Canción del arcade
audio.play();
inicio();//Directo al inicio, donde todo comienza
audio.addEventListener('ended', function() {//Mantenemos la música en loop infinito
    this.currentTime = 0;//Reiniciamos la pista
    this.play();
}, false);
