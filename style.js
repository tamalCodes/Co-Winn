


tippy("#doc", {
  content: "Consult a doctor",
  followCursor: 'horizontal',
  theme: 'tomato',
});


tippy("#food", {
    content: "Get food delivered",
    followCursor: 'horizontal',
    theme: 'tomato',
  });

  
  tippy("#beds", {
    content: "Find beds nearby",
    followCursor: 'horizontal',
    theme: 'tomato',
  });


  tippy("#o2", {
    content: "Get an oxygen tank",
    followCursor: 'horizontal',
    theme: 'tomato',
  });

   document.getElementById("lg").addEventListener("click", function () {
     document.getElementById("loginform").style.display = "block";
   });
  
  document.querySelector(".close").addEventListener("click", function () {
     document.getElementById("loginform").style.display = "none";
  });
  

  document.getElementById("sbmtbtn").addEventListener("click", function () {
    document.getElementById("loginform").style.display = "none";
  });


