import MyTestForm from "./components/MyTestForm";
import UserFromAPI from "./components/UserFromAPI";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <main className="container-fluid mb-5">
      <MyTestForm />
      <UserTable />
      <UserFromAPI />
    </main>
  );
};

export default App;
