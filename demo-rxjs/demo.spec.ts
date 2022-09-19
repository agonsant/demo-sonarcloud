import { of } from "rxjs"


test('hello test rxjs', done => {
    of(1).subscribe(d =>{
        expect(d).toBe(1);
        done()
    })
})