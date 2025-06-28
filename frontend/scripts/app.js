// Fetch message from backend API and display it
fetch('https://humble-pancake-96rw47q64gwc7vpj-3000.app.github.dev/api/hello')
  .then(response => response.json())
  .then(data => {
    document.getElementById('content').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('content').textContent = 'Error connecting to backend.';
    console.error(error);
  });
