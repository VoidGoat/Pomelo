var player1
var player2

var portal1
var portal2



function boadSetUp(){
    
    var width = 133;
    var height = 400;
    var radius = 19;
    
    player1 = [width/2, height/9 - height/18];
    player2 = [width/2, height - (height/9) + height/18];
    
    portal1 = [width/3 - width/6, height/2];
    portal2 = [width - width/3 + width/6, height/2];
    
    
    drawBoard(width, height);

    //draw player one
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(player1[0], player1[1], radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    
    //draw player two
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(player2[0], player2[1], radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#6b1352";
    //draw portal one
    ctx.beginPath();
    ctx.arc(portal1[0], portal1[1], radius, 0, 2 * Math.PI, false);
    //ctx.fill();
    ctx.stroke();
    
    //draw portal two
    ctx.beginPath();
    ctx.arc(portal2[0], portal2[1], radius, 0, 2 * Math.PI, false);
    //ctx.fill();
    ctx.stroke();
}

//3x9 board
function drawBoard(width, height){
    colorFlip = true;
    var wsize = width/3;
    var hsize = height/9;
    for(var x = 0; x < 3; x++){
        for(var y = 0; y < 9; y++){
            colorFlip = !colorFlip;
            if(colorFlip) ctx.fillStyle = "#ffe856";
            else ctx.fillStyle = "#ea5444";
            ctx.beginPath();
            ctx.rect(x*wsize, y*hsize, wsize, hsize);
            ctx.fill();
            ctx.stroke();     
        
        }      
    }   
}
