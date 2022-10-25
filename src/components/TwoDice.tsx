import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(2);
    const [right, setRight] = useState<number>(3);

    function UpdateLeft(): void {
        // Set visible to be the logical opposite of its previous value
        const l = d6();
        setLeft(l);
    }
    function UpdateRight(): void {
        // Set visible to be the logical opposite of its previous value
        const r = d6();
        setRight(r);
    }

    return (
        <div>
            <Button onClick={UpdateLeft}>Roll Left</Button>
            The Left Dice value is{left}
            <span data-testid="left-die"></span>.
            <Button onClick={UpdateRight}>Roll Right</Button>
            The Right Dice value is{right}
            <span data-testid="right-die"></span>.
            {
                // eslint-disable-next-line no-extra-parens
                left === right ? (
                    left === 1 ? (
                        <span>You Lose</span>
                    ) : (
                        <span>You Win :D</span>
                    )
                ) : (
                    <span>You Got this!</span>
                )
            }
        </div>
    );
}
