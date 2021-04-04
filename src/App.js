import Body from "./components/body/body";


const App = (props) => {
  return (
    <div>
      <Body text={props.state.profilePage.text} dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} addPost={props.addPost} />
    </div>
  );
}

export default App;
