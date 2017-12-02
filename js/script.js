function showDirection(obj, targetElement) {

    var id = $(obj).attr('id');

        switch (id) {
            case 'right':
                $(targetElement).css('transform', 'rotate(90deg)');
                break;
            case 'left':
                $(targetElement).css('transform', 'rotate(270deg)');
                break;
            case 'bottom':
                $(targetElement).css('transform', 'rotate(180deg)');
                break;
            default:
               $(targetElement).css('transform', 'rotate(0deg)');
        }

}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function getRotate(currentElement, targetElement){
	
	var winW2 = $(window).width()/2;
	var winH2 = $(window).height()/2;
	$(currentElement).mousemove(function( event ) {
	  var msg = "Handler for .mousemove() called at ";
	  msg += event.pageX + ", " + event.pageY;
	  	
	  	if(event.pageX > winW2 && event.pageY < winH2){
	  		$(targetElement).css('transform', 'rotate(270deg)');
	  	}

		if(event.pageX < winW2 && event.pageY < winH2){
		  		$(targetElement).css('transform', 'rotate(0deg)');
		  	}

		if(event.pageX > winW2 && event.pageY > winH2){
		  		$(targetElement).css('transform', 'rotate(90deg)');
		  	}

		if(event.pageX > winW2 && event.pageY < winH2){
		  		$(targetElement).css('transform', 'rotate(180deg)');
		  	}


	 	})
	}




