$(document).ready(() => {
    $("#recipt").on("change", () => {
        var fruit = $("#recipt").val();
        //console.log(fruit);
        choose(fruit);
    });
});

var choose = (fruit) => {
    // when we want to switch we need to convert to parsInt or our number to string
    switch (parseInt(fruit)) {
        case 0:
            // console.log("Banana");
            getBanana();
            break;
        case 1:
            getOrange();
            break;
        case 2:
            getDragonFruit();
            break;
    }
}
// Function get 
var getBanana = () => {
    var banana = "I love banana";
    printOut(banana);
}
var getOrange = () => {
    var orange = "I love orange";
    printOut(orange);
}
var getDragonFruit = () => {
    var dragonFruit = "I love Drangonfuit";
    printOut(dragonFruit);
}

// Print out to html 

var printOut = (out) =>{
    $("#done").html(out);
}
