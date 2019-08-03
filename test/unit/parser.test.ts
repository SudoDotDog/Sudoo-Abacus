/**
 * @author WMXPY
 * @namespace Abacus
 * @description Parser
 * @override Unit
 */

import { expect } from 'chai';
import { Parser } from '../../src/parser';

describe('Given {Parser} class', (): void => {

    it('should be able to parse - 1', (): void => {

        const expression: string = '3 + 4';
        const result: string = '3 4 +';

        expect(Parser.fromExpression(expression).toExpression()).to.be.equal(result);
    });

    it('should be able to parse - 2', (): void => {

        const expression: string = '3 - 4 + 5';
        const result: string = '3 4 - 5 +';

        expect(Parser.fromExpression(expression).toExpression()).to.be.equal(result);
    });

    it('should be able to parse - 3', (): void => {

        const expression: string = '5 + ( ( 1 + 2 ) * 4 ) - 3';
        const result: string = '5 1 2 + 4 * + 3 -';

        expect(Parser.fromExpression(expression).toExpression()).to.be.equal(result);
    });

    it('should be able to parse - 4', (): void => {

        const expression: string = '( 3 + 5 ) * ( 4 + 2 )';
        const result: string = '3 5 + 4 2 + *';

        expect(Parser.fromExpression(expression).toExpression()).to.be.equal(result);
    });

    it('should be able to parse - 5', (): void => {

        const expression: string = '( ( 15 / ( 7 - ( 1 + 1 ) ) ) * 3 ) - ( 2 + ( 1 + 1 ) )';
        const result: string = '15 7 1 1 + - / 3 * 2 1 1 + + -';

        expect(Parser.fromExpression(expression).toExpression()).to.be.equal(result);
    });

    it('should be able throw unmatched mark - 1', (): void => {

        const expression: string = '( 3 + 5 ) * ( 4 + 2 ) )';
        const error: string = '[Sudoo-Abacus] Unmatched Mark';

        expect(() => Parser.fromExpression(expression).toExpression()).to.be.throw(error);
    });

    it('should be able throw unmatched mark - 2', (): void => {

        const expression: string = '( 3 + 5 ) * ) ( 4 + 2';
        const error: string = '[Sudoo-Abacus] Unmatched Mark';

        expect(() => Parser.fromExpression(expression).toExpression()).to.be.throw(error);
    });
});
