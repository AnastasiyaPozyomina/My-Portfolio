//Эффект печатающего текста

function writeTextByJS(id, text, speed){

    var ele = document.getElementById(id),
      txt = text.join("").split("");

  var interval = setInterval(function(){

      if(!txt[0]){

            return clearInterval(interval);
     };

      ele.innerHTML += txt.shift();
   }, speed != undefined ? speed : 100);

   return false;
};

writeTextByJS(
    "main-title",
     [
         "Привет! Меня зовут\n",
         "Анастасия Позёмина.\n",
         "Я веб-разработчик.\n"
      ]
  );

  writeTextByJS(
    "main-p",
    [
        "Я проектирую и кодирую красивые\n",
        "простые вещи, и мне нравится то,\n",
        "что я делаю.\n"
       ]
      
  );




