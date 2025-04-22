import { Routes, Route } from "react-router-dom";
import JobListings from "./components/JobListings";
import Header from "./components/Header";
import ChatbotSheet from "./components/ChatBotSheet";
import SignUp from "./components/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <JobListings />
            <ChatbotSheet />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
