"use strict";

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/
// const username = prompt("Enter name")
// const age = prompt("Enter age")
// // console.log("Hello" + name + ", your" + age + "is вік_користувача")
// console.log(`Hello ${username}, your age is ${age}`)

/*
 * Властивості та методи рядків
 */
/*
  ? Запросіть у користувача ім'я та дізнайтесь першу, третю та останню букву імені та дізнайтесь з кількох символів, що складається з ім'я. (charAt or array)
*/
// sofia
// 01234
// const username = "sofia";
// console.log(username[0])
// console.log(username.charAt(0))
// console.log(username.length)
// console.log(username[username.length - 1])
// console.log(username.charAt(username.length - 1 ))
/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?.
*/
const string = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
// console.log(string.includes("JavaScript"))
// console.log(string.indexOf("JS"))

/*
  ? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;
*/
// const char = "24px";
// console.log(char.includes("px"))
// console.log(char.includes("rem"))
// console.log(char.includes("em"))
/*
  ? У нас є рядок '23,4', замініть кому на крапку (for parse methods)
*/
console.log("23,4".replace(",", "."));
/*
  ? У нас є рядок "styles.css, about.css, portfolio.css", замініть  ".css" на ".min.css"
*/
const files = "styles.css, about.css, portfolio.css";
// console.log(files.replaceAll(".css", ".min.css"));
/*
  ? Повернути новий рядок імені користувача, але щоб перша літера починалася з великої букви.
*/
// const username = "sofia";
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// const updatedUsername = username = username.replace(
//   username.charAt(0),
//   username.charAt(0).toUpperCase()
// );
// console.log(updatedUsername);

/*
  ? Скільки слів у реченні.
*/
// const sentence = "This is a sample sentence.";

// console.log(sentence.split(" ").length);
// console.log(sentence.split(" ").join("-"));

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const str = "Vasyl Pupkin is 24 years old";
// const groups = str.split(" is ");
// const username = groups[0];
// const age = groups[1];
// // console.log(age.split(" ")[0])
// // 24 years old
// // 0123456789101
// // console.log(age.slice(0, 2))
// // console.log(Number.parseInt(age))
// const formatedAge = age.slice(0, age.indexOf("years"))
// console.log(formatedAge)
// console.log(formatedAge.trim())
         