import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries";

let apiUrl=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {
  return (
    <>
    <Suspense fallback={<p>Data is Loading</p>}>
      <Countries apiUrl={apiUrl}></Countries>
    </Suspense>
     
    </>
  );
}

export default App;
