var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var todos = [{
    id:1,
    title: '청소하기',
    completed: true
  },{
    id:2,
    title: '코드랩',
    completed: false
  },{
    id:3,
    title: '귀가',
    completed: false
  }];

app.use(express.static(path.join(__dirname,'../client'))); // 미들웨어
app.use('/node_modules', express.static(path.join(__dirname,'../node_modules'))); // 미들웨어

// todo 목록 조회
app.get('/api/todos', function(req, res){
  res.json(todos);
});

// todo 생성
app.post('/api/todos', function(req, res){
  var title = req.body.title;
  // create id
  var newId = todos.length === 0 ?
      1 : todos[todos.length-1].id + 1;
  // todo object 생성
  var newTodo = {
    id: newId,
    title: title,
    completed: false
  }
  // todos 배열에 todo 추가
  todos.push(newTodo);
  res.send('success');
});

app.delete('/api/todos/:id', function(req, res){
  // find index
  var findIndex = todos.findIndex(function(todo){
    return todo.id.toString() === req.params.id;
  });
  // remove from array
  if(findIndex > -1){
    todos.splice(findIndex, 1);
  }
  res.json(todos);
});

app.put('/api/todos/:id', function(req, res){
  // find index
  var findIndex = todos.findIndex(function(todo){
    return todo.id.toString() === req.params.id;
  });
  // remove from array
  if(findIndex > -1){
    todos[findIndex].title = req.body.title;
    todos[findIndex].completed = req.body.completed;
    if(typeof req.body.completed === 'string'){
      todos[findIndex].completed = (req.body.completed === 'true');
    }
  }
  res.json(todos[findIndex]);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
