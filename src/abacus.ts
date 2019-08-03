/**
 * @author WMXPY
 * @namespace Abacus
 * @description Abacus
 */

import { expandExpression } from "./expand";
import { Parser } from "./parser";

export class Abacus {

    public static fromExpression(expression: string, split?: string) {

        const parser: Parser = Parser.fromExpression(expression, split);
        return new Abacus(parser);
    }

    public static fromList(list: string[]) {

        const parser: Parser = Parser.fromList(list);
        return new Abacus(parser);
    }

    private readonly _parser: Parser;

    private constructor(parser: Parser) {

        this._parser = parser;
    }

    public toNotationList(): string[] {

        return this._parser.toList();
    }

    public toNotationExpression(): string {

        return this._parser.toExpression();
    }

    public calculate(): number {

        const list: string[] = this._parser.toList();
        return expandExpression(list);
    }
}
