document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Masukkan tugas!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Selesai</button>
        <button class="delete-btn">Hapus</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    // Event listener for completing the task
    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.querySelector('span').classList.toggle('completed');
    });

    // Event listener for deleting the task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}
