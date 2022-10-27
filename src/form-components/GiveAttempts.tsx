import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [left, setLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const req_int = parseInt(request) || 0;
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    return (
        <div>
            Attempts Left = {left}
            <Form.Group controlId="formUpdateRequest">
                <Form.Label>
                    Attempt Request in the textfield on next line:
                </Form.Label>
                <Form.Control value={request} onChange={updateRequest} />
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button onClick={() => setLeft(left - 1)} disabled={left <= 0}>
                use
            </Button>
            <Button onClick={() => setLeft(left + req_int)}>gain</Button>
        </div>
    );
}
