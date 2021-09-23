function btnClick() {
     var greeting = prompt("Hello or Goodbye?", "Goodbye");

     if (greeting == "Hello") {
          var hello_list = document.getElementsByClassName("hello");
          for (i = 0; i < hello_list.length; i++) {
               hello_list[i].classList.add("highlight");
          };
     } else if (greeting == "Goodbye") {
          var goodbye_list = document.getElementsByClassName("goodbye");
          for (i = 0; i < goodbye_list.length; i++) {
               goodbye_list[i].classList.add("highlight");
          };
     } else {
          btnClick();
     }
}