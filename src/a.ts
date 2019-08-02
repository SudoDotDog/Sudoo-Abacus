import { isOperator, priority } from "./util";

const a = (s: string[]) => {

    const result: string[] = [];
    const buffer: string[] = [];

    loop: for (const b of s) {
        if (isOperator(b)) {
            result.push(b);
            continue loop;
        }

        if (b === '(') {
            buffer.push(b);

        } else if (b === ')') {

            while (buffer.length > 0) {
                const current = buffer.pop();
                if (current !== '(') {
                    result.push(current);
                } else {
                    continue loop;
                }
            }
            throw new Error('123');
        } else {

            if (buffer[0] === '(') {

                buffer.push(b);
            } else {

                if (priority(b, buffer[0])) {
                    buffer.push(b);
                } else {

                    while (buffer.length > 0) {
                        const current = buffer.pop();
                        if (current !== '(') {
                            result.push(current);
                        } else {
                            continue loop;
                        }
                    }
                    throw new Error('123');
                }
            }
        }


    }
};
