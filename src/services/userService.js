import fetch from 'node-fetch'
export const getTodosFromApi =  () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => {return json})
}


export class TodoService {
      getAllTodos(){
        return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {return json})
    }
}