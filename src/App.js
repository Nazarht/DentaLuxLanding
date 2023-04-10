import "./App.scss";
import WorkingHours from "./components/WorkingHours";
import Header from "./components/Header";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <WorkingHours />
      </main>
    </div>
  );
}

export default App;
