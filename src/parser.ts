/**
 * @author WMXPY
 * @namespace Abacus
 * @description Parser
 */

import { isDrown, isOperator, isRise, priority, splitExpression } from "./util";

export class Parser {

    public static fromExpression(expression: string, split?: string): Parser {

        return new Parser()._parse(splitExpression(expression, split));
    }

    public static fromList(list: string[]): Parser {

        return new Parser()._parse(list);
    }

    private readonly _buffer: string[] = [];
    private readonly _result: string[] = [];

    public toList(): string[] {

        return this._result;
    }

    public toExpression(): string {

        return this._result.join(' ');
    }

    private _parse(expression: string[]): this {

        let temp: string[] = [];
        for (const current of expression) {

            if (isOperator(current)) {

                this._pushResult(...temp);
                temp = [];
                this._symbol(current);
            } else {
                temp.push(current);
            }
        }

        this._pushResult(...temp);
        while (this._hasBuffer()) {

            this._pushResult(this._buffer.pop());
        }

        return this;
    }

    private _symbol(current: string): this {

        if (!this._lastBuffer()) {

            this._pushBuffer(current);
        } else if (isRise(current)) {

            this._pushBuffer(current);
        } else if (isDrown(current)) {

            let temp: string | undefined = this._buffer.pop();
            while (!isRise(temp) && this._hasBuffer()) {

                this._pushResult(temp);
                temp = this._buffer.pop();
            }

            if (!isRise(temp)) {
                throw new Error("[Sudoo-Abacus] Unmatched Mark");
            }
        } else {

            while (priority(current, this._lastBuffer())) {

                this._pushResult(this._buffer.pop());
            }
            this._pushBuffer(current);
        }

        return this;
    }

    private _lastBuffer(): string {

        return this._buffer[this._buffer.length - 1];
    }

    private _pushBuffer(...target: any[]): this {

        this._buffer.push(...target);
        return this;
    }

    private _pushResult(...target: any[]): this {

        this._result.push(...target);
        return this;
    }

    private _hasBuffer(): boolean {

        return this._buffer.length !== 0;
    }
}
