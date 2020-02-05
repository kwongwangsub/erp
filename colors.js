var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color){
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color);
    },
    setImageInvert:function(grade){
        $('body img').css('filter', grade);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Body.setImageInvert('invert(100%)');
        self.value = 'day';

        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Body.setImageInvert('invert(0)');
        self.value = 'night';

        Links.setColor('black');
    }
}