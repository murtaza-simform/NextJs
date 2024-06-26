export default function NotFound() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="d-flex justify-center"
    >
      <h2>404 | Not Found!</h2>
      <h3>Try again later</h3>
    </div>
  );
}
