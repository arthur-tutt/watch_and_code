console.log('testing');

var todoItems = ['item1', 'item2', 'item3'];



function createTodoItem(todo) { 
return todoItems.push(todo);
}

function editTodoItem(position, newValue) { 
return todoItems[position] = newValue;
}

function deleteTodoItem(position) {
return todoItems.splice(position, 1);
}

document.getElementById("todoDisplay").innerHTML = todoItems;