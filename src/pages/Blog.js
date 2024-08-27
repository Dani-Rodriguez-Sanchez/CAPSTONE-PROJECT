import "../styles/blog.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import NotFound from "../pages/NotFound.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "../redux/store";
import AdminDashboard from "../admin/AdminDashboard.js";
import AdminRoute from "../components/AdminRoute.js";
//import UserRoute from './components/UserRoute';
import CreatePost from "../admin/CreatePost.js";
import LogIn from "../pages/LogIn.js";
//import Register from './pages/Register';
import EditPost from "../admin/EditPost.js";
import Layout from "../admin/global/Layout.js";
//import UserDashboard from './user/UserDashboard';
//import SinglePost from './pages/SinglePost';

//High Order Component
const AdminDashboardHOC = Layout(AdminDashboard);
//const CreatePostHOC = Layout(CreatePost);
//const EditPostHOC = Layout(EditPost);
//const UserDashboardHOC = Layout(UserDashboard);

const Blog = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePost />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPost />
                  </AdminRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  );
};

export default Blog;
