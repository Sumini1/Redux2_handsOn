import { useDispatch } from "react-redux";
import Card from "./components/Card";
import { decrement, increment } from "./reducer/counterSlice";

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <Card />
    </>
  );
}
export default App;

