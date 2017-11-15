$(document).ready( initializeGame );

function initializeGame(){
    view.gameboardCreation();
}



var model = {
    grid: [],
    CreateGridCell: function(y, x){
        this.occupied = false;
        this.location = y + '-' + x;
        this.player = null;
    },
    createGridArrayMatrix: function(){
        for (var y=0; y<8; y++){
            var row = [];
            for (var x=0; x<8; x++){
                var cell = new this.CreateGridCell(y, x);
                row.push(cell)
            }
            this.grid.push(row);
        }
    }
};

var view = {
    gameboardCreation: function() {
        for (var i = 0; i < 8; i++) {
            var row = $('<div>').addClass('row');
            for (var col = 0; col < 8; col++) {
                var column = $('<div>').addClass('column');
                $(row).append(column);
            }
            $('#gameboard').append(row);
        }
    }



};

var controller = {

};
