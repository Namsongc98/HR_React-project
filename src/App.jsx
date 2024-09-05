import { RouterProvider } from "react-router";
import ModalComponent from "./components/common/ModalComponent";
import { Layout } from "antd";
import router from "./router";
import { store } from "./stores/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
        <ModalComponent />
      </Provider>
    </Layout>
  );
}

export default App;
