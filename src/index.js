import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RND':
            return state + action.value
        default:
            return state
    }
}

// action creator's 
const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = value => ({type: 'RND', value}) // action.value строка 10, данные value строка 33

let store = createStore(reducer) // создал store, с логикой функции reducer

// dispatch - метод стора, который передает из функции reducer ее 2ой аргумент action, т.е. объект-действие 
document.querySelector('#inc').addEventListener('click', () => {
    store.dispatch(inc()) // ({type: 'INC'})
})

document.querySelector('#dec').addEventListener('click', () => {
    store.dispatch(dec()) // ({type: 'DEC'})
})

document.querySelector('#rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10)
    store.dispatch(rnd(value)) // value - аргумент функции rnd
    // новые данные вносить только таким образом, reducer должен быть чистой функцией 
})

const update = () => {
    document.querySelector('#counter').textContent = store.getState() // getState() - метод стора, который получает значение state
}

store.subscribe(update) // subscribe() - метод стора, который следит за изменением в store. subscribe - подписка