import {getTodosFromApi, TodoService} from '../src/services/userService'
//jest.mock('../src/services/userService')

describe('user service',()=>{
   it('get data works',done=>{
        let data;
       getTodosFromApi().then(data=>{
           console.log(data)
        expect(data.length).toBeGreaterThan(0)
        done()
       });
       
        
    })

    it('get data works using await way',async (done)=>{
         const todoService = new TodoService()
        const  data = await todoService.getAllTodos()
            expect(data.length).toBeGreaterThan(0)
            done()
    })
})