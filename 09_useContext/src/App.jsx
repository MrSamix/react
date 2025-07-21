import CategoryListPage from "./pages/category/CategoryListPage";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import CategoryCreatePage from "./pages/category/CategoryCreatePage";
import CategoryUpdatePage from "./pages/category/CategoryUpdatePage";
import HomePage from "./pages/home/HomePage";
import DefaultLayout from "./components/layouts/DefaultLayout";
import TestComponent from "./components/test/TestComponent";
import { useAuth } from "./features/context/AuthContext";
import { useEffect } from "react";

import "./App.css";
import ProfilePage from "./pages/profile/ProfilePage";

const users = [
  {
    email: "alex93@mail.com",
    password: "qwerty"
  },
  {
    email: "sophie.tanaka@example.org",
    password: "qwerty"
  },
  {
    email: "john.doe87@gmail.com",
    password: "qwerty"
  },
  {
    email: "maria_kovalchuk@ukr.net",
    password: "qwerty"
  },
  {
    email: "nick.romanov2025@yahoo.com",
    password: "qwerty"
  },
  {
    email: "lena_foxx@protonmail.com",
    password: "qwerty"
  },
  {
    email: "dmytro.pavlenko99@outlook.com",
    password: "qwerty"
  },
  {
    email: "olga_ivanova@icloud.com",
    password: "qwerty"
  },
  {
    email: "kate.bondarenko77@gmail.com",
    password: "qwerty"
  }
];

function App() {
    const {login, googleLogin} = useAuth();

    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users))
    }

    useEffect(() => {
        const authData = localStorage.getItem("auth");
        const googleData = localStorage.getItem("googleAuth");

        if(authData) {
            login(JSON.parse(authData));
            return;
        }
        if(googleData) {
            googleLogin(JSON.parse(googleData));
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/categories">
                        <Route index element={<CategoryListPage />} />
                        <Route path="create" element={<CategoryCreatePage />} />
                        <Route
                            path="edit/:name"
                            element={<CategoryUpdatePage />}
                        />
                    </Route>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/test" element={<TestComponent />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
