import { Metadata } from "next";
import TodoMind from "./component/TodoMind";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo",
};
export default function page() {
  return (
    <div className="pb-20 pt-40">
      <TodoMind />;
    </div>
  );
}
