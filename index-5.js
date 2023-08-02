/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - кількість постів, число
? topics - масив тем на яких спеціалізується блогер
? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
? Добав метод getInfo(),який, повертає рядок: Blogger ${email} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

/*
? Напиши клас Storage, який створює об'єкти для управління складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
? Додай методи класу:
? getItems() – повертає масив товарів.
? addItem(item) - отримує новий товар та додає його до поточних.
? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/

/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
*/

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
}

const user = new User({ login: "sofia", email: "sofia@gmail.com" });

console.log(user.getEmail());
user.changeEmail("s@gmail.com");
console.log(user.getEmail());

// console.log(user.login);
// console.log(user.email);

// user.email = "s@gmail.com";
// user.login = "sofia29";

// console.log(user.login);
// console.log(user.email);

/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
?   LOW: 'low',
?   NORMAL: 'normal',
?   HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

class Notes {
  static priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  notes = [];

  addNote(note) {
    this.notes.push({ ...note, priority: Notes.priority.LOW });
  }
  removeNote(text) {
    this.notes = this.notes.filter((note) => note.text !== text);
  }
  updatePriority(text, newPriority) {
    const note = this.notes.find((note) => note.text === text);

    note.priority = newPriority;
  }
}

// const notes = new Notes();
// notes.addNote({ text: "learn JS" });
// notes.addNote({ text: "watch videos" });
// notes.addNote({ text: "do homework" });

// notes.removeNote("watch videos");

// notes.updatePriority("learn JS", Notes.priority.HIGH);
// console.log(notes);

/*
? Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean}
? та оголошує одну властивість on/off вкл/викл (true/false).
? За замовчанням значення властивості on має бути false.
*/

class Toggle {
  constructor({ isOpen }) {
    this.isThemeSelected = isOpen;
  }

  toggle() {
    this.isThemeSelected = !this.isThemeSelected;
  }
}

const switchTheme = new Toggle({ isOpen: false });
switchTheme.toggle();
