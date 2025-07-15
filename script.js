// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('error');

  if (name === '' || email === '' || message.length < 10) {
    error.textContent = "Please complete all fields and write a detailed message.";
    return;
  }

  const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;
  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "";
  alert("Message sent successfully!");
  this.reset();
});

// To-do List functionality
function addTask() {
  const taskInput = document.getElementById('todoInput');
  const task = taskInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">❌</button>`;
  document.getElementById('todoList').appendChild(li);
  taskInput.value = '';
}