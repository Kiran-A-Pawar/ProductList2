const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product', {

        useCreateIndex: true,
        useNewUrlParser : true,
        useUnifiedTopology: true
}).then(()=> {
    console.log("conection successful");

}).catch((e) => {
    console.log("No Connection");
})