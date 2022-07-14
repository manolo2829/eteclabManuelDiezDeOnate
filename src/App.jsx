import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = 'Texto importado desde greeting'

  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
