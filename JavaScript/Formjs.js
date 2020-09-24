   jQuery(function($) {
      $.mask.definitions['~']='[+-]';
      $('#telefon').mask('(999) 999-9999');
	  
	  $('#ulkekod').change(function(){ 
            var select_val = $("#ulkekod").val();
            if(select_val == "tr"){ 
            $('#telefon').mask('(999) 999-9999');
       } 

            if(select_val == "fr"){ 
            $('#telefon').mask('(06) 99-99-99-99');
       } 

       if(select_val == "abd"){ 
           $('#telefon').mask('(408) 999-9999');
       } 
        });
		
		$('#tarih').mask('99/99/9999');
   });
   
	function gonderim(){
		var a=(Math.floor(Math.random() * 3)); 
		if(a % 2 == 0){
          window.alert("Gönderim Başarılı");
		  }
		if(a % 2 != 0){
          window.alert("Gönderim Başarısız");
		  }
      };
