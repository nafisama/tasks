import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");

    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer?:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );

    return (
        <div>
            <h3>Check Answer</h3>
        </div>
    );
}
