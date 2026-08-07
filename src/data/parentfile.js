export class Tasks {

  tasks = [];
  #storageKey = '';

  constructor(storageKey) {
    this.#storageKey = storageKey;
    this.loadFromLocalStorage();
  }

  #saveToLocalStorage() {
    localStorage.setItem(this.#storageKey, JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    this.tasks = JSON.parse(localStorage.getItem(this.#storageKey)) || [];
  }

  addTasks(data) {
    this.tasks.push(data);
    this.#saveToLocalStorage(this.tasks);
  }

} 