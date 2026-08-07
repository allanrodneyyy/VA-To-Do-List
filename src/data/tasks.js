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
    this.tasks = JSON.parse(localStorage.getItem(this.#storageKey)) || [{
      title: 'Sample',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      client_id: 0,
      status_id: 1,
      priority_id: 1,
      category: 'Web design',
      deadline: '',
      hours: '5'
    }];
  }

  addTasks(data) {
    this.tasks.push(data);
    this.#saveToLocalStorage(this.tasks);
  }

} 