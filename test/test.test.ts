import * as mocha from 'mocha';
import * as  expect from 'expect';
import * as C from '../src/reducers/default';


describe('Test', () => {
    it('Action Creator Base Class', () => {


        let dog: any = {
            sound: 'woof',
            talk: function () {
                console.log('talk', this);
                console.log(this.sound);
            },
            talk2: () => {
                console.log('talk2', this);
                console.log(this.sound);
            }
        }

        dog.kkk = () => { console.log(this.sound) };

        dog.kkk();

        let t2 = dog.kkk;
        t2();



    })
});



