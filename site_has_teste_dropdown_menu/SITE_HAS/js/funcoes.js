$(window).scroll(function () {
    var s = $(this).scrollTop(),
        h = $('#header').height();
    if (s < h)
        $('#menuprincipal').css('top', h - s);
    else
        $('#menuprincipal').css('top', 0);
});

//chamada do dropdown
/*
function dropdownCall() {
    document.getElementById(".myDropdown").classList.toggle("show");
  }
  
  // fecha o dropdown caso clique fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/