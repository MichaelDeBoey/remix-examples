import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

import { add } from "~/rust.server";
import indexStylesUrl from "~/styles/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStylesUrl },
];

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { left_operand, operator, right_operand } =
    Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));
  switch (operator) {
    case "+":
      const result = add(Number(left_operand), Number(right_operand));
      console.log("result", result);
      return json({
        result,
      });
    default:
      // Implement other operators
      return json({
        result: "🤷🏾",
      });
  }
};

export default function Index() {
  const data = useActionData<typeof action>();

  return (
    <Form className="form-container" method="post" replace>
      <div className="grid-container">
        <input
          className="operand"
          type="number"
          name="left_operand"
          id="left_operand"
          placeholder="2"
          required
        />
        <select className="operator" name="operator" id="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          className="operand"
          type="number"
          name="right_operand"
          id="right_operand"
          placeholder="2"
          required
        />
        <button className="submit" type="submit">
          =
        </button>
        <div className="result">{data?.result ? data?.result : ""}</div>
      </div>
    </Form>
  );
}
