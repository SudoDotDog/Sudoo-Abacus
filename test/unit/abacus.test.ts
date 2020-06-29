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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('abacus-abacus');

    it('should be able to create', (): void => {

        const abacus: Abacus = Abacus.fromExpression('');

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(abacus).to.be.exist;
        expect(abacus).to.be.instanceOf(Abacus);
    });

    it('should be able to calculate - 1', (): void => {

        const abacus: Abacus = Abacus.fromExpression('5 + ( ( 1 + 2 ) * 4 ) - 3');

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(abacus.calculate()).to.be.equal(14);
    });

    it('should be able to calculate - 2', (): void => {

        const abacus: Abacus = Abacus.fromExpression('( ( 15 / ( 7 - ( 1 + 1 ) ) ) * 3 ) - ( 2 + ( 1 + 1 ) )');

        expect(abacus.calculate()).to.be.equal(5);
    });

    it('should be able to calculate - split - 1', (): void => {

        const abacus: Abacus = Abacus.fromExpression('(3+5)*(4+2)', '');

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(abacus.calculate()).to.be.equal(48);
    });
});
