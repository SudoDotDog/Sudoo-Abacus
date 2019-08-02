/**
 * @author WMXPY
 * @namespace Abacus
 * @description Util
 */

import { OPERATOR } from "./declare";

export const isOperator = (value: string): boolean => {

    const list: string[] = [
        OPERATOR.PLUS,
        OPERATOR.MINUS,
        OPERATOR.TIMES,
        OPERATOR.DIVIDE,
        OPERATOR.RISE,
        OPERATOR.DROWN,
    ];
    return list.includes(value);
};

export const priority = (a: string, b: string): boolean => {

    const map: Record<OPERATOR, number> = {

        [OPERATOR.PLUS]: 2,
        [OPERATOR.MINUS]: 2,
        [OPERATOR.TIMES]: 3,
        [OPERATOR.DIVIDE]: 3,
        [OPERATOR.RISE]: 1,
        [OPERATOR.DROWN]: 4,
    };
    return map[a] <= map[b];
};
