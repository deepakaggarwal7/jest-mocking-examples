import {advanceMaths} from '../src/advanceMath/advanceMaths'
//jest.mock('../src/advanceMath/advanceMaths') //important
jest.mock('../src/maths') //important
describe('advanceMaths',()=>{
    it('square should work',()=>{
        let answer = advanceMaths.square(3)
        expect(answer).toBe(9)
    })
})