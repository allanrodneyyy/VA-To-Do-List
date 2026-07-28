export class ClientsData {

  clientsList = [];
  #storageKey = '';

  constructor(storageKey) {
    this.#storageKey = 'Clients';
    this.#loadFromLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.#storageKey, JSON.stringify(this.clientsList));
  }

  #loadFromLocalStorage() {
    this.clientsList = JSON.parse(localStorage.getItem(this.#storageKey)) || [{
      id: 0,
      name: 'First Client',
      company: 'Company 1',
      email: 'email1@gmail.com',
      phone: '0123455678',
      status: 1,
      priority: 1,
      notes: ''
    }];
  }

} 