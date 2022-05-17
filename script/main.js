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



function main(){

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
}

main();
