
  var platformProperty = {
  	  
  };
  
  (function(platform){
  	
	  var zh = {
	  	 popwindow: {
	       ok: '确定',
	       cancel: '取消',
	       tips: '提示'
	    }
	  }
	  
	   var en = {
	    popwindow: {
	       ok: 'ok',
	       cancel: 'cancel',
	       tips: 'tips'
	    }
	  }
	  
	  if(localStorage.locale == 'en_US'){
	  	 $.extend( true,zh, en );
	  }
	 
	  
	  
	  platformProperty = zh;
  	
  })(platformProperty)
 

