var canvas;
var context;
// single block has size: width == 30 pxl, height == 30 pxl
var numRows = 18;
var numCols = 10;

// grid defined x by y, aka col by row
var gridArray = new Array();

function Game(){
    this.gameLoop = null;
    var self = this;
    
    this.Init = function(){
        canvas = document.getElementById("tCanvas");
        context = canvas.getContext("2d");
        //context.fillStyle="#FF0000";
        //context.fillRect(0,0,150,75);
        
        var cRow = (canvas.height/numRows);
        for(var i = 1; i < numRows; i++) {
            //draw lines horiz to see all rows in grid
            context.beginPath();
            context.moveTo(0, cRow * i);
            context.lineTo(canvas.width, cRow * i);
            context.closePath();
            context.stroke();
        }
        
        var cCol = (canvas.width/numCols);
        for(var i = 1; i < numCols; i++) {
            //draw lines vert to see all cols in grid
            context.beginPath();
            context.moveTo(cCol * i, 0);
            context.lineTo(cCol * i, canvas.height);
            context.closePath();
            context.stroke();
        }
        
        // set all values in array grid === 0
        for(var i = 0; i < numCols; i++) {
            for(var j = 0; j < numRows; j++) {
                gridArray[i][j] = 0;
            }
        }
    }
    
    this.Run = function(){        
        if(canvas != null){
            self.gameLoop = setInterval(self.Loop, 50);
        }
            
    }
    
    this.Update = function(){
        // Update Objects
    }
    
    this.Draw = function(){
        buffer.clearRect(0, 0, _buffer.width, _buffer.height);
        canvas.clearRect(0, 0, _canvas.width, _canvas.height);
        
        //Draw Code
        canvas.drawImage(_buffer, 0, 0);
    }
    
    this.Loop = function(){
        self.Update();
        self.Draw();    
    }
}