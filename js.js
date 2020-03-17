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
         "HTML-верстальщик.\n",
         "Анастасия Позёмина.\n"
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


//фильтрация портфолио
  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-portfolio");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




