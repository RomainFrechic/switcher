var species = {
    cat    : "cat.jpg",
    bear   : "bear.jpg",
    fish   : "fish.jpg"
};





function main(){

    $("button").click(function() {
        console.log("test");
        var animal = $(this).data("animal");
        console.log(animal);
        animal = species[animal];
        console.log(animal);
        $("#holder").html("<img src=img/"+ animal+"></img>");
    });
    
}
