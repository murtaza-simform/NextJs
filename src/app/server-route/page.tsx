// import { clientfunction } from "../utils/clientFunction";
import ImageSlider from "../utils/ImageSlider";
import { serverfunction } from "../utils/serverFunction";

export default function ServerRoutePage() {
  const result = serverfunction();

  console.log("Rendering from server!");
  // const res = clientfunction();
  
  return (
    <>
      <div>Server Page route</div>
      <h2>{result}</h2>
      <ImageSlider />
    </>
  );
}
