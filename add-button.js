const text = document.querySelector('.todo-input').value
        const priority = document.querySelector('.priority').value
        
        document.querySelector('.add-todo').addEventListener('click', function(){
            console.log('anything')
            const text = document.querySelector('.todo-input').value
            const thing = {
                text:text,
                priority:document.querySelector('.priority').value,
                complete: false,
                id:1,
            }
            addTodo(thing)
            printTodo(thing)
        })
