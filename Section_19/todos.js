alert('Hello')
let input = prompt("What would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean the house'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {

        console.log("**********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }

        console.log("**********************")

    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} add to the log!!!`)
    } else if (input === 'delete') {

        const indexStr = prompt('Ok, Enter an index to delete!!!');
        const index = parseInt(indexStr)
        if (!Number.isNaN(index)) {
            const dele = todos.splice(index, 1);
            console.log(`Oke, Delete ${dele[0]} success!!!`);
        } else {
            console.log("Unkown index");
        }
    }

    input = prompt("What would you like to do?")
}
console.log("OK! Quit The App");