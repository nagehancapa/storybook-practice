import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default { title: "atoms/button" };

export const Standard = () => (
  <Button onClick={action("Button")}>This is a button</Button>
);
