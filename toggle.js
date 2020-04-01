printTodos(todos);
​
document.querySelector(".hide-complete").addEventListener('click', function() {
    if (document.querySelector(".hide-complete").innerText === 'Show Priorities') {
        document.querySelector(".hide-complete").innerText = 'Hide Priorities'
        } else {
        document.querySelector(".hide-complete").innerText = 'Show Priorities'
    }
}
​
​
​
printTodos(todos);
​
document.querySelector(".hide-complete").addEventListener('click', function() {
    if (document.querySelector(".hide-complete").innerText === 'Show Priorities') {
        document.querySelector(".hide-complete").innerText = 'Hide Priorities'
        } else {
        document.querySelector(".hide-complete").innerText = 'Show Priorities'
    }
})
​
printTodos(todos);
​
document.querySelector(".hide-low-priority").addEventListener('click', function() {
    if (document.querySelector(".hide-low-priority").innerText === 'Show Priorities') {
        document.querySelector(".hide-low-priority").innerText = 'Hide Priorities'
        } else {
        document.querySelector(".hide-low-priority").innerText = 'Show Priorities'
    }
}
​
​
​
​
printTodos(todos);
​
document.querySelector(".high-priority-first").addEventListener('click', function() {
    if (document.querySelector(".high-priority-first").innerText === 'Show Priorities') {
    document.querySelector(".high-priority-first").innerText = 'Hide Priorities'
    } else {
    document.querySelector(".high-priority-first").innerText = 'Show Priorities'
    }
}