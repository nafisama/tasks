import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function Decrease(): void {
        // Set visible to be the logical opposite of its previous value
        const newAttempt = attempt - 1;
        setAttempt(newAttempt);
    }
    function Increase(): void {
        // Set visible to be the logical opposite of its previous value
        const newAttempt = attempt + 1;
        setAttempt(newAttempt);
    }
    function UpdateQuiz(): void {
        // Set visible to be the logical opposite of its previous value
        if (progress === false && attempt > 0) {
            Decrease();
        }
        setProgress(!progress);
    }

    return (
        <span>
            Attempts Left:{attempt}
            <Button
                onClick={UpdateQuiz}
                disabled={
                    // eslint-disable-next-line no-extra-parens
                    attempt > 0 ? (progress === true ? true : false) : true
                }
            >
                Start Quiz
            </Button>
            <Button onClick={UpdateQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={Increase} disabled={progress}>
                Mulligan
            </Button>
        </span>
    );
}
