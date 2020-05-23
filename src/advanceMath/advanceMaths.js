import {maths} from '../maths'

export class advanceMaths {
    static square = (num) => {
     
        let square=0,i = 0;
        let m = new maths();
        for(i=1;i<num;i++){
         
            square += m.add(num,num)
        }
       
        return square
    }
}