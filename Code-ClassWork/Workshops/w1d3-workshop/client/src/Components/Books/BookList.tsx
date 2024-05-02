import React from "react";
import { Book } from "../../Types/types";
type Props = {
  data: Book;
};
export default function BookList(props: Props) {
  const { data } = props;
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.summary}</p>
    </div>
  );
}
