import React from "react";

function Button({ onClick, children, style, onMouseOver, onMouseOut }) {
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={style}
    >
      {children}
    </button>
  );
}

function PassedButton() {
  function handleMouseOver(event) {
    console.log("Ready to confirm pass");
    event.target.style.backgroundColor = "lightgreen";
    event.target.style.color = "darkgreen";
  }

  function handleMouseOut(event) {
    console.log("Mouse left the pass button");
    event.target.style.backgroundColor = "white";
    event.target.style.color = "green";
  }

  return (
    <Button
      onClick={() => alert("You have passed the module!")}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: "white",
        color: "green",
        padding: "10px",
        border: "1px solid green",
        borderRadius: "5px",
      }}
    >
      Passed
    </Button>
  );
}

function FailedButton() {
  function handleMouseOver(event) {
    console.log("Ready to confirm fail");
    event.target.style.backgroundColor = "lightcoral";
    event.target.style.color = "darkred";
  }

  function handleMouseOut(event) {
    console.log("Mouse left the fail button");
    event.target.style.backgroundColor = "white";
    event.target.style.color = "red";
  }

  return (
    <Button
      onClick={() => alert("Student failed the module!")}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: "white",
        color: "red",
        padding: "10px",
        border: "1px solid red",
        borderRadius: "5px",
      }}
    >
      Failed
    </Button>
  );
}

export default function GradeToolbar() {
  return (
    <div>
      <PassedButton />
      <FailedButton />
    </div>
  );
}
