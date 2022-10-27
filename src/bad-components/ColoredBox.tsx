import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
export interface colors {
    setColorIndex: (col: number) => void;
    idx: number;
}

function ChangeColor({ setColorIndex, idx }: colors): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + idx) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: { color: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    idx={colorIndex}
                ></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
        </div>
    );
}
