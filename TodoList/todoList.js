let todos = [{name:"learn react",dueDate:"09-09-09"},{name:"learn js",dueDate:"09-09-09"}];
function renderTodoList(){
    let todoListHtml = '';
    todos.forEach(function(todoObject,index){
        const {name,dueDate} = todoObject;
        const html = `<div>${name}</div>
                    <div> ${dueDate}</div>
                    <button onclick="
                    todos.splice(${index},1);
                    renderTodoList();
                    " class="delete-todo-button">Delete</button>
                    `
        
        todoListHtml += html;
    })
    document.querySelector('.todo-list').innerHTML = todoListHtml;
}


function addTodo(){
    let nameElement = document.querySelector('.todo-item')
    const dueDateElement = document.querySelector('.todoDate')
    const name = nameElement.value;
    const dueDate = dueDateElement.value;
    todos.push({name,dueDate})
    console.log(todos)
    nameElement.value = '';
    dueDateElement.value = '';
    renderTodoList();
}