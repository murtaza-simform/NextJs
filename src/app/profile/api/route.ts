import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));

    const headersList =  headers();
    console.log(headersList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    cookies().set("resultsPerPage", "20");

    const resultsPerPage = cookies().get("resultsPerPage");
    console.log(resultsPerPage);

  return new Response("<h1>Hello World!<h1>", {
    headers: {
        "Content-Type": "text/html",
        "Set-Cookie":"theme=dark"
    }
  });
}
