import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";
//TestingLibraryElementError: 
//Unable to find an element with the text: 40. This could be because the text is broken up
// by multiple elements. 
//In this case, you can provide a function for your text matcher to make your matcher more
// flexible.
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
