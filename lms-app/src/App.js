import './App.css';
import Auth from './Auth.jsx';
import { Toaster } from 'react-hot-toast';
import FileUpload from "./FileUpload";
import CourseList from "./CourseList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        {/* Default Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <Auth />
              <FileUpload />
            </div>
          }
        />

        {/* Course List Page */}
        <Route path="/courses" element={<CourseList />} />
      </Routes>
    </BrowserRouter>
  );
}
