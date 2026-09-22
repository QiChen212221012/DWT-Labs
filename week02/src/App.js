// App.js
import AlertButton from "./AlertButton";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>React Event Handler</h1>
      <div className="card">
        <h2>Button Event</h2>
        <AlertButton />
      </div>
    </div>
  );
}
