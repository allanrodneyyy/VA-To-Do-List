export class Tasks {

  tasksList = [];
  #storageKey = '';

  constructor(storageKey) {
    this.#storageKey = storageKey;
    this.loadFromLocalStorage();
  }

  #saveToLocalStorage() {
    localStorage.setItem(this.#storageKey, JSON.stringify(this.tasksList));
  }

  loadFromLocalStorage() {
    this.tasksList = JSON.parse(localStorage.getItem(this.#storageKey)) || [{
      id: 1,
      title: 'Sample',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      client_id: 0,
      status_id: 1,
      priority_id: 1,
      category: 'Web design',
      deadline: '',
      hours: '5'
    }, {
      id: 2,
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
    this.tasksList.push(data);
    this.#saveToLocalStorage();
  }

  removeTasks(id) {
    this.tasksList = this.tasksList.filter(task => task.id !== id);
    this.#saveToLocalStorage();

    console.log(this.tasksList);
  }

} 