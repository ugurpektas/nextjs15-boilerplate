import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../store/store";

// Redux Provider ile sarmalayan yardımcı bir fonksiyon oluşturun
const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

export default renderWithProvider;
