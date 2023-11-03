document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const itemInput = document.getElementById('itemInput');
  const list = document.getElementById('list');
  const items = [];

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      text: itemInput.value.trim()
    };
    items.push(newItem);
    renderList();
    itemInput.value = '';
  });

  function deleteItem(id) {
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
      items.splice(index, 1);
      renderList();
    }
  }

  function renderList() {
    list.innerHTML = '';
    items.forEach(function(item) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.text}</span>
        <button onclick="deleteItem(${item.id})">Excluir</button>
      `;
      list.appendChild(li);
    });
  }
});