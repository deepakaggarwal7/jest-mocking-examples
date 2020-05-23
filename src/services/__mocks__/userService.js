
export function getTodosFromApi(){   
  return new Promise((resolve,reject)=>{
    resolve([{"item":"A"}])
  })
}


export class TodoService {
      getAllTodos(){
        return [{"task":"B"}]
    }
}