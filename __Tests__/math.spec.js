import {maths} from '../src/maths'
//jest.mock('../src/maths') //important
describe('maths',()=>{
    it('add should work',()=>{
        let answer = new maths().add(2,3)
        expect(answer).toBe(5)
    })
})