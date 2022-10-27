import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "black"
];
const DEFAULT_COLOR = COLORS[0];
export function ChangeColor(): JSX.Element {
    const [favorite, setFavorite] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setFavorite(e.target.value)}
                    id={color}
                    label={color}
                    value={color}
                    checked={favorite === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: favorite,
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                The color is {favorite}
            </div>
        </div>
    );
}
