# Todata

### Goal

We'll be building [this SO FANCY todo app](https://todata-solution.surge.sh/).


### What Does That Entail?

Using the back end we've built, let's implement the following features on the FRONT END:

* Show priorities in addition to text.
* Show only not complete items.
* Show only high priority items.
* Move completed items to the bottom.
* Move high priority items to the top.

For those last two, we'll ALSO have to finish the sorting portion of our back end. Run `npm test` when you're ready to do a little back-end work!


### It Doesn't Entail Everything, Though!

We highly recommend you familiarize yourself with the code we've got before you get started. There's a lot already there, so don't spend time writing code that already exists!


### Some Problems You'll Have To Solve

* How can we toggle the completeness of a todo by clicking on it?
* How can we change the text of the buttons that are toggling? For example, when we click "Show Priorities", it changes to "Hide Priorities" so that we can toggle that feature back off.
* How can we access the pulldown menu for adding priority to a todo?


### An Important Guideline:

You should be using INLINE functions for your event listeners. No more having to make (and name!) helper functions.

So instead of this:

```javascript
const listener = function(event) {
// ...
}

document.querySelector('.some-class').addEventListener('click', listener);
```

We can do this:

```javascript
document.querySelector('.some-class').addEventListener('click', function(event) {
// ...
})
```

Let us know if you have any questions about that syntax!


### We've added a few things to help you along, like:

* an `id` field to each todo object
* and a `currentTodos` array you can reassign to (declared with `let` in `todos.js`) without changing your underlying data.
* We've also separated our functions into separate files. Feel free to do the same with any new functions you make, but at the least, try navigating these files and see if you find it easier or harder than scrolling through one large one.
* And that includes some files we'd suggest for your buttons' event listeners. Feel free to make those files or different files... but remember to link them in your `index.html` if you use different files!

### Tips And Hints:

* You can use the `id` field of each object, which, in `printTodo`, also gets put on the DOM as the `li`'s `id`. Now you can find the right todo to edit no matter what order your todos are in. You may not end up using it, but remember that it's there!


# Step By Step (Oh Baby)

This is a more fine-grained step-by-step guide to making Todata happen, for those who don't want to figure it out all on their lonesome.


### Part One: Adding Todos

Create a new `add-todos-button-controller.js` file and let's get cracking!

* Query the button for adding todos and add an event listener function. This can be done in one line using 1) dot-chaining and 2) an anonymouse function as the second parameter to `addEventListener`.
* Inside that event listener function, query the todo user input box and save it to a variable. We'll need to use it a few times!
* Now We're ready to create our todo object. It needs four fields: the `text`, `completeness`, `id`, and `priority`. You can grab the `priority` and `text`'s values from the DOM. Where would they be located? I'll leave you to think about the values for `complete` (easy to figure out) and `id` (a bit harder).
* Now push that object into `todos`. And maybe currentTodos? We'll have to figure out when or even whether to use this copy-of-todos (find it in `todos.js`).
* Finally, let's update the DOM. Call `refreshTodos`--it takes no parameters and simply erases the list and rewrites it to bring it in line with whatever's in `todos`. (Or maybe it should be `currentTodos`? Hey, I'm just the idea man. That's YOUR job.)
