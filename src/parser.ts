/**
 * @author WMXPY
 * @namespace Abacus
 * @description Parser
 */

import { isDrown, isOperator, isRise, priority } from "./util";

export class Parser {

    public static fromExpression(expression: string, split: string = ' ') {

        return new Parser()._parse(expression.split(split));
    }

    public static fromList(list: string[]) {

        return new Parser()._parse(list);
    }

    private readonly _buffer: string[] = [];
    private readonly _result: string[] = [];

    private _parse(expression: string[]) {

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

        return this._result;
    }

    private _symbol(current: string) {

        if (!this._lastBuffer()) {
            this._pushBuffer(current);
            return;
        }

        if (isRise(current)) {

            this._pushBuffer(current);
        } else if (isDrown(current)) {

            let temp: string | undefined = this._buffer.pop();
            while (!isRise(temp)) {

                this._pushResult(temp);
                temp = this._buffer.pop();
            }
        } else if (priority(current, this._lastBuffer())) {

            while (priority(current, this._lastBuffer())) {

                this._pushResult(this._buffer.pop());
            }
            this._pushBuffer(current);
        } else {

            this._pushBuffer(current);
        }
    }

    private _lastBuffer(): string {

        return this._buffer[this._buffer.length - 1] as string;
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
