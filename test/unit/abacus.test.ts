/**
 * @author WMXPY
 * @namespace Abacus
 * @description Abacus
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { Abacus } from '../../src/abacus';

describe('Given {Abacus} class', (): void => {

    const chance: Chance.Chance = new Chance('abacus-abacus');

    it('should be able to create', (): void => {

        const abacus: Abacus = Abacus.create();

        // tslint:disable-next-line
        expect(abacus).to.be.exist;
        expect(abacus).to.be.instanceOf(Abacus);
    });
});
