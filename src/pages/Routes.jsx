
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPages from "./MainPages"
import Post from "./Post";

const Routing = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPages />} />
      <Route path="/answers:questionId" element={<Post />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routing