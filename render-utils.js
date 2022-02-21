export function renderTodo(todo) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.classList.add(todo.complete ? 'complete' : 'incomplete');
    div.classList.add('todo');

    p.textContent = todo.todo;

    div.append(p);

    return div;
}