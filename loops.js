
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp","stapler", "computer",  "computer"];

var counter = 0;

for( var i = 0; i < officeItems.length; i++) {
    //console.log(officeItems[i]);
    
    if( officeItems[i] === "computer" ) {
        //counter = counter + 1;
        counter += 1;
    }
}

console.log( counter );