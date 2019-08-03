/**
 * @author WMXPY
 * @namespace Abacus
 * @description Expand
 */

import { OPERATOR } from "./declare";
import { calculate, ensureNumber, isOperator } from "./util";

export const expandExpression = (list: string[]): number => {

    const cloned: string[] = [...list];
    const buffer: string[] = [];

    while (cloned.length > 0) {

        const current: string = cloned.shift() as string;
        if (isOperator(current)) {

            if (buffer.length < 2) {
                throw new Error("[Sudoo-Abacus] Insufficient Elements");
            }

            const second: number = ensureNumber(buffer.pop());
            const first: number = ensureNumber(buffer.pop());

            buffer.push(calculate(current as OPERATOR, first, second).toString());
        } else {

            buffer.push(current);
        }
    }

    if (buffer.length === 1) {
        return ensureNumber(buffer[0]);
    }

    throw new Error("[Sudoo-Abacus] Invalid expression");
};
