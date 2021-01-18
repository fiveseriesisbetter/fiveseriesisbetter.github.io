var parsed = "";
var events = [{
                    firstname: "Jane",
                    lastname: "Doe",
                    email: "jdoe@email.com"
                }, {
                    firstname: "Ja",
                    lastname: "joe",
                    email: "je@email.com"
                }, {
                    firstname: "Janet",
                    lastname: "joes",
                    email: "jsse@email.com"
                }];

for (i = 0; i< myObject.length; i++) {
                    var myobj=  myObject[i];
                    for (var property in myobj) {
                        parsed += property + ": " + myobj[property] + "\n";          
                    }
                }                           
                $("#display").val(parsed);