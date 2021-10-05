function btnClick() {
     var greeting = prompt("Hello or Goodbye?", "Goodbye");

     if (greeting == "Hello") {
          var hello_list = document.getElementsByClassName("hello");
          for (i = 0; i < hello_list.length; i++) {
               var words = hello_list[i].innerHTML.split(' ');
               words[2] = parseInt(words[2]) * 2;
               hello_list[i].innerHTML = words.join(' ');
          };
     } else if (greeting == "Goodbye") {
          var goodbye_list = document.getElementsByClassName("goodbye");
          for (i = 0; i < goodbye_list.length; i++) {
               var words = goodbye_list[i].innerHTML.split(' ');
               words[2] = parseInt(words[2]) * 2;
               goodbye_list[i].innerHTML = words.join(' ');
          };
     } else {
          btnClick();
     }
}