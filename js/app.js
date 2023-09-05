
$(function(){

let doc = $(window);
let nav = $(`#navigation`);
doc.on(`scroll`, function(){
    let top1 = doc.scrollTop();



    if(top1 > 100){
        nav.addClass(`top`);
    }else{
        nav.removeClass(`top`);
    }
})
})
