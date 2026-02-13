import { formatCurrency } from "../scripts/money.js";


describe('test suite : formatCurrency',() =>{
    it('testing format currency',()=>{
        expect(formatCurrency(2020)).toEqual('20.20');
    });
});