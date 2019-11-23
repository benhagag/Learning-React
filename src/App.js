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
import Props from "./components/learning_react/8.props/Props";
import MainComponenet from "./components/learning_react/9.propsAndStyling/MainComponent";
import MappingComponent from "./components/learning_react/11.mappingComponenets/MappingComponent";
import TodoAppPhase3 from "./components/learning_react/12.todoAppPhase3/TodoAppPhase3";
import Class from "./components/learning_react/13.class-basedComponents/Class";
import State from "./components/learning_react/14.state/State";
import TodoAppPhase4 from "./components/learning_react/15.todoAppPhase4/TodoAppPhase4";
import HandlingEvents from "./components/learning_react/16.handlingEvents/HandlingEvents";
import TodoAppPhase5 from "./components/learning_react/17.todoAppPhase5/TodoAppPhase5";
import ChangingState from "./components/learning_react/18.changingState/ChangingState";
import TodoAppPhase6 from "./components/learning_react/19.todoAppPhase6/TodoAppPhase6";
import LifecycleMethodsPart1 from "./components/learning_react/20.lifecycleMethodsPart1/LifecycleMethodsPart1";
import LifecycleMethodsPart3 from "./components/learning_react/21.lifecycleMethodsPart3/LifecycleMethodsPart3";
import ReactConditionalRender from "./components/learning_react/22.reactConditionalRender/ReactConditionalRender";
import ReactConditionalRender2 from "./components/learning_react/23.reactConditionalRender2/ReactConditionalRender2";
import ReactConditionalRenderPracticeByFunctionalComponent from "./components/learning_react/24.reactConditionalrenderPractice/ReactConditionalRenderPracticeByFunctionalComponent";
import ReactConditionalRenderPracticeByClassComponent from "./components/learning_react/24.reactConditionalrenderPractice/ReactConditionalRenderPracticeByClassComponent";
import TodoAppPhase7 from "./components/learning_react/25.todoAppPhase7/TodoAppPhase7";
import FethcingAPIdata from "./components/learning_react/26.fetchingAPIdata/FethcingAPIdata";
import FormsPart1 from "./components/learning_react/27.formsPatr1/FormsPart1";
import FormsPart2 from "./components/learning_react/28.formsPart2/FormsPart2";

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
      <h1 className="subject-learn">8. Props</h1>
      <Props />
      <h1 className="subject-learn">9. Props And Styling</h1>
      <MainComponenet />
      <h1 className="subject-learn">11. Mapping Componenets</h1>
      <MappingComponent />
      <h1 className="subject-learn">12. Todo App Phase 3</h1>
      <TodoAppPhase3 />
      <h1>13. Class componenets! </h1>
      <Class />
      <h1>14. State </h1>
      <State />
      <h1>15. Todo App Phase 4</h1>
      <TodoAppPhase4 />
      <h1>16. Handling Events</h1>
      <HandlingEvents />
      <h1>17. Todo App Phase 5</h1>
      <TodoAppPhase5 />
      <h1>18. Change State</h1>
      <ChangingState />
      <h1>19. TODO App Phase 6</h1>
      <TodoAppPhase6 />
      <h1>20. Lifecycle Methods Part 1</h1>
      <LifecycleMethodsPart1 />
      <h1>21. Lifecycle Methods Part 3</h1>
      <LifecycleMethodsPart3 />
      <h1>22.React Conditional Render</h1>
      <ReactConditionalRender />
      <h1>23.React Conditional Render 2</h1>
      <ReactConditionalRender2 />
      <h1>
        24.React Conditional Practice based on functional component and using
        State Hook
      </h1>
      <ReactConditionalRenderPracticeByClassComponent />
      <h1>
        24.1.React Conditional Practice based on class component and using
        this.state
      </h1>
      <ReactConditionalRenderPracticeByFunctionalComponent />
      <h1>25.React Todo App Phase7</h1>
      <TodoAppPhase7 />
      <h1>26.React Fetching Data from API</h1>
      <FethcingAPIdata />
      <h1>27.React Forms part 1</h1>
      <FormsPart1 />
      <h1>28.React Forms part 2</h1>
      <FormsPart2 />
      {/* ============================================================================= */}
    </div>
  );
}

export default App;
