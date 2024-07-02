import Card from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Archived Notifications</div>
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            textDecoration: "none",
          }}
        >
          <Link href={"/dashboard"}>Default</Link>
        </div>
      </div>
    </Card>
  );
}
