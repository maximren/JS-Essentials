    function validate(keys, x) {
        for (var i = 0; i < keys.length; i++) {
            console.log(x.hasOwnProperty(keys[i]))
            if (!x.hasOwnProperty(keys[i])) {
                throw "error since " + keys[i] + " wasn't passed on object"
            }
        }
    }

    validate(["name","surname"], {name:"Roman",surname:"Rodomansky"});