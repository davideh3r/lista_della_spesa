let shoppingList = [];

function saveList() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function loadList() {
  const savedList = localStorage.getItem('shoppingList');
  if (savedList) {
    try {
      shoppingList = JSON.parse(savedList);
      const shoppingListElement = document.getElementById('shoppingList');
      shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.onclick = () => {
          const index = shoppingList.indexOf(item);
          if (index !== -1) {
            shoppingList.splice(index, 1);
            saveList();
            li.remove();
          }
        };
        li.appendChild(deleteButton);
        shoppingListElement.appendChild(li);
      });
    } catch (error) {
      console.error('Errore durante il caricamento della lista:', error);
    }
  }
}

function addItem() {
  const itemInput = document.getElementById('item');
  const itemValue = itemInput.value.trim();
  if (itemValue !== '') {
    shoppingList.push(itemValue);
    saveList();

    const shoppingListElement = document.getElementById('shoppingList');
    const li = document.createElement('li');
    li.textContent = itemValue;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.onclick = () => {
      const index = shoppingList.indexOf(itemValue);
      if (index !== -1) {
        shoppingList.splice(index, 1);
        saveList();
        li.remove();
      }
    };
    li.appendChild(deleteButton);
    shoppingListElement.appendChild(li);

    itemInput.value = '';
  }
}

// Assicurati che loadList() venga chiamata dopo che il DOM è pronto
document.addEventListener('DOMContentLoaded', loadList);

function addItem() {
  const itemInput = document.getElementById('item');
  const itemValue = itemInput.value.trim();
  if (itemValue !== '') {
    shoppingList.push(itemValue);
    saveList(); // Salva la lista aggiornata nel LocalStorage

    const shoppingListElement = document.getElementById('shoppingList');
    const li = document.createElement('li');
    li.textContent = itemValue;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.onclick = () => {
      shoppingList = shoppingList.filter(i => i !== itemValue);
      saveList(); // Salva la lista aggiornata nel LocalStorage
      li.remove();
    };
    li.appendChild(deleteButton);
    shoppingListElement.appendChild(li);

    itemInput.value = '';
  }
}

loadList();