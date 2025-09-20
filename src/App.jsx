import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries";

let apiUrl=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto">
         <Suspense fallback={<p>Data is Loading</p>}>
      <Countries apiUrl={apiUrl}></Countries>
    </Suspense>
      </div>
     
    </>
  );
}

export default App;
