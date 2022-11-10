// BÀI TẬP 1:
function primeNumber() {
  var input = document.getElementById("numberInput").value * 1;
  var show = document.getElementById("exam5Result");
  var log = "";
  if (input <= 1) {
    alert("Nhập số nguyên lớn hơn 1");
  } else {
    for (var i = 2; i <= input; i++) {
      var check = true;
      for (var j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
          check = false;
        }
      }
      if (check == true) {
        String(i);
        log += i + " ";
      }
    }
    show.innerHTML = log;
  }
}
