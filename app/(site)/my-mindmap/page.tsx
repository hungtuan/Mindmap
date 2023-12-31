import { Metadata } from "next";
import Container from "./Container";
export const metadata: Metadata = {
  title: "MindMap",
  description: "MindMap",
};
export default function page() {
  return <Container />;
}
