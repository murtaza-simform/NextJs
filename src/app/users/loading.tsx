// Show a loading indicator while the user data is being fetched
export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center" style={{height: "50vh"}}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
    </div>
  );
}
