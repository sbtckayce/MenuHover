window.addEventListener('load',function (){
    var items = [...document.querySelectorAll('.menu-item a span')];
    items.forEach((item)=> item.addEventListener('mouseenter',handleHoverLink));
    var line =this.document.createElement('div');
    line.className ='line-effect';
    this.document.body.appendChild(line);
    function handleHoverLink(event){
          var {left ,top,width,height} =event.target.getBoundingClientRect() ;
          console.log({left ,top,width,height});

          line.style.width=`${width}px`;
          line.style.left=`${left}px`;
          line.style.top=`${top+height}px`;
        //   line.style.height=`${height}px`;
    }
    var menu =this.document.querySelector('.menu-hover');
    menu.addEventListener('mouseleave',function(){
        line.style.width=0;
    })

})

