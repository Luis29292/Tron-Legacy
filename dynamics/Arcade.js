function inicio()
{
  var audio = new Audio("../statics/audio/theme.mp3");
  audio.play();
  let bod = document.getElementsByTagName("body");
  var grid = document.createElement("div");
  grid.id = "grid";
  for (i=0; i<4; i++){
    var emp = document.createElement("div");
    grid.appendChild(emp);
  }
  var bot1 = document.createElement("div");
  bot1.innerHTML="<center><button>Busca Minas</button></center>";
  bot1.addEventListener('click', function(e) {
    buscaM();
  });
  grid.appendChild(bot1);
  bod[0].appendChild(grid);
}
function buscaM(){
  let bod = document.getElementsByTagName("body");
  bod[0].innerHTML='<header><section id="cw"> Curso Web 2020 </section><nav><section id="b1"> Inicio </section><section id="b2"> TEAM </section></nav></header>';
  bod[0].innerHTML+='<div class="container"><div class="grid"></div><div>Banderas restantes: <span id="flags-left"></span></div><div id="result"></div></div>';
//Revisa que esté cargado
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
inicio();
