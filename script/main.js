function Open_Frame(page){
    let ld = document.getElementById("FRAME");
    ld.src = "pages/" + page;
    document.getElementById("loader_page").style.display = "block";
}

function finishin_load(){
    document.getElementById("loader_page").style.opacity = "100%";
}

function set_gride_color_hover(color, i)
{
    i.style.backgroundImage = color;

}

function show_servers(){
    document.getElementById('Serve_download').style.display = 'block'; 
}

function new_tab(link){
    window.open(link, '_blank')
}


function checkVisible(elm) {
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function stopScroll(scrolldelay) {
    clearTimeout(scrolldelay);
    }

function pageScrollUp(To, scrolling = -10){
    value_ = (document.documentElement.scrollTop || document.body.scrollTop);
    if(value_ > To){
        window.scrollBy(0,scrolling);
    }else{
            stopScroll(scrolldelay);
    }
}

function btn_close_()
{
    let lp = document.getElementById('loader_page');
    lp.style.display = "none";
}


function seeExplain(me){
    explin = me.childNodes[1];
    if(explin.id != "" && explin.id != undefined ){
        explin.style.display = "block";
    }
}

function unseeExplain(me){
    explin = me.childNodes[1];
    if(explin.id != "" && explin.id != undefined ){
        explin.style.display = "none";
    }
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
    

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    //console.log(elmnt.offsetTop + " e " + pos2 + " contudo: " + elmnt.style.top );
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




function main(){


    loading = document.getElementById("loading");
    if (loading != null){
        loading.style.display = "none";
    }

   

    let btn_close = document.getElementById("close_page");
    if (btn_close != undefined){
        btn_close.addEventListener("click", function(e){    
            let lp = document.getElementById('loader_page');
            lp.style.display = "none";
        });
    }


    count = document.getElementsByClassName('Box').length;
    game_background = document.getElementById('backgroundGame');

    for ( let i = 0; i < count; ++i){
        boxies = document.getElementsByClassName('Box')[i];

        if (boxies.id != undefined && boxies.id != "" ){
            console.log(boxies.id);

            //boxies.addEventListener()
            // set gif background game
            
            set_gride_color_hover("var(--" + boxies.id + ")", boxies.childNodes[1]);
        }
    }

    explains_locations();

    trainer_img = document.getElementById('photoMOD');
    //console.log(trainer_img);
    if (trainer_img != null)
    trainer_img.addEventListener("click", show_percentual_img);
   



}

function explains_locations(){
    count = document.getElementsByClassName("FunctionExplain").length;

    for ( let i = 0; i < count ; i++){

        div_ =  document.getElementsByClassName("FunctionExplain")[i];
        //console.log(div_);
        x = div_.getAttribute("metadataX");
        if (x == null) continue;
        
        y = div_.getAttribute("metadataY");
        h = div_.getAttribute("metadatah");
        w = div_.getAttribute("metadataW");
        location_div =  getPerctualImage(x,y, h, w);
        //console.log(location_div);
        div_.style.left = location_div[0] + 'px'; //left: 5px; top:120px
        div_.style.top = location_div[1] + 'px';
        div_.style.height =  location_div[2] + 'px';
        div_.style.width =  location_div[3] + 'px';

    }
}



window.onload = main;
window.onresize = explains_locations;




function getPerctualImage(positionX, positionY, h,w){

    img_ = getImageLocationOnScreen();
    if (img_ == null) return;

    result_x = positionX * img_[0].width / 100;
    result_x += img_[0].x;

    result_y = positionY * img_[0].height / 100;

    result_h = h * img_[0].height / 100;
    result_w = w * img_[0].width / 100;
    //result_y += img_[0].y;

    return [result_x,  result_y, result_h, result_w ];


}


function getImageLocationOnScreen(){
    let img = document.getElementById("photoMOD");
    if(img != null)
    return img.getClientRects();
}

function create_retan(){

    retan = document.getElementById('DEV_MOD');
    console.log(retan);
    let iniciar = document.createElement('div');
    iniciar.style.left = "10%";
    iniciar.style.top = "10%";
    iniciar.style.width = "50px";
    iniciar.style.height = "15px";

    iniciar.classList.add("generic_retans")
    iniciar.onclick = dragElement(iniciar);
   
    iniciar.addEventListener('dblclick', function(e){ showMe(iniciar) });
    retan.appendChild(iniciar);

}

function show_percentual_img(e){
    pos_x = e.offsetX * 100 / trainer_img.getClientRects()[0].width;
    pos_y = e.offsetY * 100 / trainer_img.getClientRects()[0].height;
    console.log( pos_x.toFixed(1) + '  ' + pos_y.toFixed(1) );
}


function showMe(me){
    img_ = getImageLocationOnScreen();

    if ( img_ == null) return;

    
    positionX = me.style.left.replace('px', '');
    positionY = me.style.top.replace('px', '');
    height = me.style.height.replace('px', '');
    width = me.style.width.replace('px', '');
    positionX -=  img_[0].x;

    result_x = (positionX ) *  100 /img_[0].width;
   

    result_y = positionY * 100  / img_[0].height;

    result_h = height * 100 / img_[0].height;
    result_w = width *100  /  img_[0].width;


    console.log('metadataX = "' +  result_x.toFixed(1) + '" metadataY="' + result_y.toFixed(1) + 
    '" metadataH= "' + result_h.toFixed(1) + '" metadataW= "' + result_w.toFixed(1) + '"')
}

