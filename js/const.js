
var currentTab = 0; // Current tab is set to be the first tab (0) Текущая вкладка установлена ​​как первая вкладка (0)
showTab(currentTab); // Display the crurrent tab Показать вкладку текущего

function showTab(n) {
  // This function will display the specified tab of the form... Эта функция отобразит указанную вкладку в форме ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons: и исправьте кнопки «Предыдущая / Следующая»:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
  }
  //... and run a function that will display the correct step indicator:и запустите функцию, которая будет отображать правильный индикатор шага:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display Эта функция определит, какую вкладку отображать
  var x = document.getElementsByClassName("tab");
  // Выйдите из функции, если какое-либо поле в текущей вкладке недопустимо:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:Скрыть текущую вкладку:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1: Увеличить или уменьшить текущую вкладку на 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... если вы достигли конца формы ...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab: В противном случае отобразите правильную вкладку:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields  Эта функция имеет дело с проверкой полей формы
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab: Цикл, который проверяет каждое поле ввода в текущей вкладке:
  for (i = 0; i < y.length; i++) {
    // If a field is empty... Если поле пусто ...
    if (y[i].value == "") {
      // add an "invalid" class to the field: недопустимый класс в поле:
      y[i].className += " invalid";
      // and set the current valid status to false и установите текущий действительный статус в false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid: Если действительный статус равен true, пометьте шаг как завершенный и действительный:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status вернуть действительный статус
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps... Эта функция удаляет «активный» класс всех шагов ...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step: и добавляет «активный» класс на текущий шаг:
  x[n].className += " active";
}
