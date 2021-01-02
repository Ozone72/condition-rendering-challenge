import React from "react";
import Form from "./Form";

// ! This would be where you
let userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
