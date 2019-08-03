/**
 * @author WMXPY
 * @namespace Abacus
 * @description Direct
 */

import { Abacus } from "./abacus";

export const evaluate = (expression: string, split?: string): number => {

    const abacus: Abacus = Abacus.fromExpression(expression, split);
    return abacus.calculate();
};

export const safeEvaluate = (expression: string, split?: string): number | null => {

    try {

        const abacus: Abacus = Abacus.fromExpression(expression, split);
        return abacus.calculate();
    } catch (err) {

        return null;
    }
};
