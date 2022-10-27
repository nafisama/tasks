import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event2: React.ChangeEvent<HTMLInputElement>) {
        if (edit) {
            setName(event2.target.value);
        }
    }
    return (
        <div>
            {name} is{student ? " a " : " not a "}student
            <Form.Check
                type="switch"
                id="is-in-edit"
                label="Edit?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ? (
                <div>
                    <Form.Group controlId="Name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                </div>
            ) : (
                <span>Not in Edit Mode</span>
            )}
        </div>
    );
}
