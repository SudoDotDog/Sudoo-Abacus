/**
 * @author WMXPY
 * @namespace Abacus
 * @description Expand
 * @override Unit
 */

import { expect } from 'chai';
import { expandExpression } from '../../src/expand';
import { splitExpression } from '../../src/util';

describe('Given [Expand] functions', (): void => {

    it('should be able to expand - 1', (): void => {

        const expression: string = '3 4 +';

        expect(expandExpression(splitExpression(expression))).to.be.equal(7);
    });

    it('should be able to expand - 2', (): void => {

        const expression: string = '3 4 - 5 +';

        expect(expandExpression(splitExpression(expression))).to.be.equal(4);
    });

    it('should be able to expand - 3', (): void => {

        const expression: string = '5 1 2 + 4 * + 3 -';

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(expandExpression(splitExpression(expression))).to.be.equal(14);
    });

    it('should be able to expand - 4', (): void => {

        const expression: string = '3 5 + 4 2 + *';

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(expandExpression(splitExpression(expression))).to.be.equal(48);
    });

    it('should be able to expand - 5', (): void => {

        const expression: string = '15 7 1 1 + - / 3 * 2 1 1 + + -';

        expect(expandExpression(splitExpression(expression))).to.be.equal(5);
    });
});
