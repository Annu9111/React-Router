# ReactRoutes 🚀

A modern React project built to learn and demonstrate **React Router** concepts such as routing, nested routes, dynamic routes, navigation, loaders, API integration, and reusable components.

## 🌐 Live Demo

🔗 https://react-router-lac-gamma.vercel.app/

## 📂 GitHub Repository

🔗 https://github.com/Annu9111/React-Router

---

## 📌 About The Project

**ReactRoutes** is a learning project created to understand how routing works in modern React applications.

The project uses **React Router** to create multiple pages and navigate between them without completely reloading the website.

It also includes a **GitHub API integration** that fetches GitHub profile information dynamically.

The main purpose of this project was to gain practical experience with React Router and understand how different routing concepts work together in a real React application.

---

## ✨ Features

- 🏠 Home page
- 📖 About page
- 📞 Contact page
- 🐙 GitHub profile integration
- 🔗 Client-side navigation
- 🧭 React Router navigation
- 📁 Nested routes
- 👤 Dynamic routes
- ⚡ `useParams`
- 🔄 `Link` and `NavLink`
- 📦 `Outlet`
- 🚀 `createBrowserRouter`
- 🧩 `RouterProvider`
- 📡 GitHub API integration
- ⚙️ Route loaders
- 📥 `useLoaderData`
- 🎨 Tailwind CSS styling
- 📱 Responsive layout
- 🚀 Deployed on Vercel

---

## 🛠️ Technologies Used

- **React.js**
- **React Router DOM**
- **JavaScript**
- **Tailwind CSS**
- **Vite**
- **GitHub REST API**
- **Git & GitHub**
- **Vercel**

---

## 🧠 React Router Concepts Learned

### 1. createBrowserRouter

Used to create the application's routing configuration.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);
