import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
//type QuestionType = "multiple_choice_question" | "short_answer_question";

// Maps the Old state -> New State
const Transitions: Record<QuestionType, QuestionType> = {
    // eslint-disable-next-line prettier/prettier
    "multiple_choice_question": "short_answer_question",
    // eslint-disable-next-line prettier/prettier
    "short_answer_question": "multiple_choice_question"
};
export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionT(): void {
        const newQuestion = Transitions[questionType];
        setQuestionType(newQuestion);
    }

    return (
        <div>
            <div>
                Current Question Type: <span>{questionType}</span>
                <Button onClick={changeQuestionT}>Change Type</Button>
            </div>
            <div>
                {questionType === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
