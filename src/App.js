import React from "react";
import logo from "./logo.svg";
import "./App.css";

// learning react

//functionalComponentsPractice
import MyInfo from "./components/learning_react/1.functionalComponents/MyInfo";
//parentChildComponets
import Parent from "./components/learning_react/2.parentChildComponets/Parent";
//parentChildComponets
import NavbarPractice from "./components/learning_react/3.parentChildComponets/NavbarPractice";
import MainPractice from "./components/learning_react/3.parentChildComponets/MainPractice";
import FooterPractice from "./components/learning_react/3.parentChildComponets/FooterPractice";
import ToDoAppPhase1 from "./components/learning_react/4.todoAppPhase1/ToDoAppPhase1";
import JsxJavaScript from "./components/learning_react/5.jsxToJavascriptAndBack/JsxJavaScript";
import InlineStyles from "./components/learning_react/6.inlineStylesWithStyleProperty/InlineStyles";
import TodoAppPhase2 from "./components/learning_react/7.todoAppPhase2/TodoAppPhase2";
//=======================================================================================================================
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* learning react */}
      <h1 className="subject-learn">1. functional components practice</h1>
      <MyInfo />
      <h1 className="subject-learn">2. parent child componenets</h1>
      <Parent />
      <h1 className="subject-learn">3. parent child componenets</h1>
      <NavbarPractice />
      <MainPractice />
      <FooterPractice />
      <h1 className="subject-learn">4. To Do App Phase 1</h1>
      <ToDoAppPhase1 />
      <h1 className="subject-learn">5. JSX To JavaScript And Back</h1>
      <JsxJavaScript />
      <h1 className="subject-learn">
        6. Inline Styles with the Style property
      </h1>
      <InlineStyles />
      <h1> 7. Todo App Phase 2</h1>
      <TodoAppPhase2 />

      {/* ============================================================================= */}
    </div>
  );
}

export default App;
