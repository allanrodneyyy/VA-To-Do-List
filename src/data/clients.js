export class Clients {

  clientsList = [];
  #storageKey = '';

  constructor(storageKey) {
    this.#storageKey = storageKey;
    this.loadFromLocalStorage();
  }

  #saveToLocalStorage() {
    localStorage.setItem(this.#storageKey, JSON.stringify(this.clientsList));
  }

  loadFromLocalStorage() {
    this.clientsList = JSON.parse(localStorage.getItem(this.#storageKey)) || [];
  }

  addClients(data) {
    this.clientsList.push(data);
    this.#saveToLocalStorage(this.clientsList);
    console.log(this.clientsList);
  }

} 