document.addEventListener("DOMContentLoaded", function(event) { 
    //getting elements to manipulate
    var menuBtn = document.getElementById('menu-btn');
    var dropdownMenu = document.getElementById('dropdown-menu');

    menuBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('is-visible');        
    });

    var dataText = [ "Opa! Sou o Caio Resende", "Seu novo parceiro Criativo", "Aproveite e role a página e conheça meus trabalhos recentes", "Não se esqueça de conhecer mais sobre mim", "Mande um Oi"];



  function typeWriter(text, i, fnCallback) {

    var headline = document.getElementById('headline');
	
    if (i < (text.length)) {
        headline.innerHTML = text.substring(0, i + 1) + '<span class="typewriter" aria-hidden="true"></span>';

        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
         }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 400);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
          StartTextAnimation(0);
     }

    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function() {
		 function clearText() {
			 setTimeout(function() {
                var foo = headline.innerHTML.replace('<span class="typewriter" aria-hidden="true"></span>', "");
                
                if(foo.charAt(foo.length-1)===">") {
                    var newX= foo.substring(0,foo.length - 4);

                } else {
                    var newX= foo.substring(0,foo.length - 1);		

                }
                headline.innerHTML = newX + '<span class="typewriter" aria-hidden="true"></span>';

                if(newX.length > 0) {				 
                    clearText();
                } else {
                    StartTextAnimation(i + 1);
                }
		  }, 50);
		 }
		  setTimeout(function() {
          clearText();
        }, 400);
		 
		
     });
    } else {
	}
  }

  StartTextAnimation(0);
});
