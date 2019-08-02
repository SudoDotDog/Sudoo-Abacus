import { priority, isOperator } from "./util";

export class Parser {

    public static a(expression: string[]) {

        return new Parser()._parse(expression);
    }

    private readonly _buffer: string[] = [];
    private readonly _result: string[] = [];

    private _parse(expression: string[]) {

        let temp: string[] = [];
        for (const current of expression) {

            if (isOperator(current)) {

                this._result.push(...temp);
                temp = [];
                this._symbol(current);
            } else {
                temp.push(current);
            }
        }

        this._result.push(...temp);
        while (this._buffer.length > 0) {

            this._result.push(this._buffer.pop());
        }

        return this._result;
    }

    private _symbol(current: string) {

        let lastChar = this._buffer[this._buffer.length - 1];
        if (!lastChar) {
            this._buffer.push(current);
            return;
        }

        if (current === '(') {

            this._buffer.push(current);
        } else if (current === ')') {

            let temp = this._buffer.pop();
            while (this._hasBuffer() && temp !== '(') {
                this._result.push(temp);
                temp = this._buffer.pop();
            }
        } else if (priority(current, lastChar)) {
            while (lastChar && priority(current, lastChar)) {

                this._result.push(this._buffer.pop());
                lastChar = this._buffer[this._buffer.length - 1];
            }
            this._buffer.push(current);
        } else {
            this._buffer.push(current);
        }
    }

    private _hasBuffer() {

        return this._buffer.length !== 0;
    }
}
