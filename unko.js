!function(){
    var style = `
        <style>
            .unko{
                height:60px;
                width:100px;
                margin:33px;
                display:inline-block;
            }
            .unko .stage_top{
                height:45%;
                width:25%;
                display:block;
                margin: 0 auto; 
                transform: rotate(-110deg);
                margin-bottom:-25%;
                position:relative;
                top:-11%;
                z-index:10000;
            }
            .unko .stage_top .top{
                height:100%;
                width:100%;
                background-color:brown;
                border-radius: 50% 50% 0 50%;
                display:inline-block;
                border-left:3px solid #911c1c;
            }
            .unko div[class^='stage_']:not(.stage_top){
                height:30%;
                display:block;  
                margin: 0 auto;  
                position:relative;
            }
            .unko .stage_1{
                width:40%;
                z-index:9999;
            }
            .unko .stage_2{
                width:60%;
                z-index:9998;
            }
            .unko .stage_3{
                width:80%;
                z-index:9997;
            }
            .unko div[class^='stage_'] .main-contents{
                height:182%;
                width:100%;
                display:block;  
                margin: 0 auto;
                background-color:#b22222;
                top:-7%;
                border-bottom:3px solid #911c1c;
                position:absolute;
                border-radius:50%;
                z-index:2;
            }
        </style>
    `;
    document.write(style);
}();

window.addEventListener('DOMContentLoaded', function(){
    const stage = 3;
    var unkos = [].slice.call(document.getElementsByClassName('unko'));
    unkos.forEach( function(unko) {
        var stage_top = document.createElement('div');
        stage_top.className = 'stage_top';
        var top = document.createElement('div');
        top.className = 'top';

        var size = unko.getAttribute('size') ? unko.getAttribute('size') : -1;
        if(size >= 0){
            unko.style.height = (size * 0.6) + 'px';
            unko.style.width = size + 'px';
            unko.style.margin = (size * 0.3) + 'px';
            top.style.borderLeft = (size * 0.03) + 'px solid #911c1c'
        }
        stage_top.appendChild(top);
        unko.appendChild(stage_top);

        for (var i=1; stage >= i; i++ ){
            var parent = document.createElement('div');
            parent.className = 'stage_'+i;
            var child = document.createElement('div');
            child.className = 'main-contents';

            if(size >= 0) child.style.borderBottom = (size * 0.03) + 'px solid #911c1c';
            parent.appendChild(child);
            unko.appendChild(parent);
        }
    });
});