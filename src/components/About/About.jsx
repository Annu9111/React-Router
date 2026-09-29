// import React from 'react' 

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="../src/images/bulb.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Built to Learn React Routing
                        </h2>
                        <p className="mt-6 text-gray-600">
                            ReactRoutes is a learning project I created to understand how routing works in React applications. I built this project using React and React Router to create a multi-page-like experience without reloading the entire website.
                        </p>
                        <p className="mt-4 text-gray-600">
                            While building this project, I learned how to create routes, navigate between pages, build nested layouts, use dynamic routes with useParams, and manage navigation using Link and NavLink.
                            I also integrated the GitHub API to fetch real-time profile information and used React Router's loader functionality to load API data before rendering the GitHub page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
