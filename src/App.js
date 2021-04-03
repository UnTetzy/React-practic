import Body from "./components/body/body";


const App = (props) => {
  return (
    <div>
      <Body text={props.text} dialogs={props.dialogs} messages={props.messages} />
    </div>
  );
}

export default App;
