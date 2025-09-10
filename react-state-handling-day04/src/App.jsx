import Counter from "./components/Counter";
import FormValidation from "./components/FormValidation";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <Counter />
      <FormValidation />
      <TodoApp />
      <Footer />
    </div>
  );
}
