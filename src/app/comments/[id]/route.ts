import { comment } from "postcss";
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {

  if(parseInt(params?.id) > comments?.length){
    redirect("/comments")
  }

    const comment = comments.find(comment => comment?.id === parseInt(params?.id));

    return Response.json(comment);
}


export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {

  const body = await request?.json();
  const index = comments.findIndex(
    (comment) => comment?.id === parseInt(params?.id)
  );

  const {text} = body;

  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment?.id === parseInt(params?.id)
  );

  const deletedComment = comments[index];

  comments.splice(index, 1);
  return Response.json(deletedComment);
}
