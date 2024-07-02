import Link from "next/link";

export default function f4() {
    return (
      <>
        <div>F4 Page</div>
        <br /> <br />
        <Link href={"/f1/f3"}>F3</Link>
        <br/><br/>
        <Link href={"/about"}>About</Link>
      </>
    );
}