/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holidays =
        | "Ramadan"
        | "NewYears"
        | "Christmas"
        | "Father's Day"
        | "Mother's Day";
    const Alpha: Record<Holidays, Holidays> = {
        // eslint-disable-next-line prettier/prettier
        "Christmas": "Father's Day",
        "Father's Day": "NewYears",
        // eslint-disable-next-line prettier/prettier
        "NewYears": "Mother's Day",
        "Mother's Day": "Ramadan",
        // eslint-disable-next-line prettier/prettier
        "Ramadan": "Christmas"
    };
    const YearC: Record<Holidays, Holidays> = {
        // eslint-disable-next-line prettier/prettier
        "NewYears": "Ramadan",
        // eslint-disable-next-line prettier/prettier
        "Ramadan": "Mother's Day",
        // eslint-disable-next-line prettier/prettier
        "Mother's Day": "Father's Day",
        "Father's Day": "Christmas",
        // eslint-disable-next-line prettier/prettier
        "Christmas": "NewYears"
    };
    const [holiday, setHoliday] = useState<Holidays>("Ramadan");
    function changeAlpha(): void {
        const newH = Alpha[holiday];
        setHoliday(newH);
    }
    function changeYear(): void {
        const newH = YearC[holiday];
        setHoliday(newH);
    }

    return <div>
        <Button onClick={changeAlpha}>Alphabet</Button>
        <Button onClick={changeYear}>Year</Button>
        {// eslint-disable-next-line prettier/prettier, indent
        holiday === "Ramadan" ? <span>Holiday: ☪️️</span>:holiday === "NewYears"?<span>Holiday: 🎄</span>:holiday === "Mother's Day"?<span>Holiday: 👩</span>:holiday === "Father's Day"?<span>Holiday: 👨</span>:<span>Holiday: 🎁</span>
        }
    </div>;
}
