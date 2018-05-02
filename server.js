var express = require('express');
var app = express();
app.listen(8000);
// app.get('/', function(request, response){
//     console.log("Hello World");
// });


/* app.get('/', function(request, response){
    response.send("Hey, hello from the server!");
}); */

/* app.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
}); */

app.get('/anotherRoute', function(request, response){
    response.send("Hey, I'm another route!");
});

app.get('/me', function(request, response){
    response.send({name: 'Mordehai', favoriteFood: 'Couscous', birthday: '22/041969'});
});

app.use(express.static('public'));
app.use(express.static('node_modules'));
