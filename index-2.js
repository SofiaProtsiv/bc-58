/*
 * Методи об'єкта і THIS при зверненні до властивостей у методах
 */

/*
 * - getTitle() - повертає назву фільма
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */
const title = ""
const filmDuna = {
    title: 'Duna',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
    rating: 10,
    actors: [
        'Rosetta Pena',
        'Clayton Crawford',
        'Larry Norton',
        'Georgia Garrett',
        'Jackson Ballard',
    ],
    adult: false,
    showFilm() {
        console.log(this)
        // console.log(filmDuna)
    },
    getTitle() {
        // console.log(filmDuna.title)
        console.log(this.title)
    },

    changeTitle(newTitle) {
        this.title = newTitle
        // filmDuna.title = newTitle
    },
    addActor(newActor) {
        this.actors.push(newActor)
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    isAdult() {
        if (this.adult) {
            console.log("Цей фільм для дорослих")
        }
        console.log("Цей фільм для всіх")
    }
};

filmDuna.getTitle()
filmDuna.changeTitle("Avatar")
filmDuna.getTitle()
filmDuna.addActor("sofia")
filmDuna.updateRating(8)
filmDuna.isAdult()
filmDuna.showFilm()