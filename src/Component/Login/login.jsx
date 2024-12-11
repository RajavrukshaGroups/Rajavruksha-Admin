import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to dashboard if already logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            navigate('/'); // Replace '/dashboard' with your desired route
        }
    }, [navigate]);

    const Signin = async (email, password) => {
        console.log("Email:", email);
        console.log("Password:", password);

        const url = "https://admin-rajavruksha.vercel.app/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            if (data.success) {
                alert("Login Successful");
                localStorage.setItem('isLoggedIn', true); // Set login state in localStorage
                navigate('/'); // Redirect to the dashboard
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error during signin:", error.message);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Please fill in the email and password");
        } else {
            Signin(email, password);
        }
    };

    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img
                    src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                    alt="Placeholder Image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-4xl font-semibold mb-4 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//       // Redirect to dashboard if already logged in
//       const isLoggedIn = localStorage.getItem('isLoggedIn');
//       if (isLoggedIn) {
//           navigate('/dashboard'); // Replace '/dashboard' with your desired route
//       }
//   }, [navigate]);

//    const Signin = async (email, password) => {
//         console.log("Email:", email);
//         console.log("Password:", password);
    
//         const url = "http://localhost:3000/login";
//         try {
//           const response = await fetch(url, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//           });
    
//           if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//           }
    
//           const data = await response.json();
//           console.log(data);
    
//           if (data.success) {
//             localStorage.setItem('isLoggedIn', true); // Set login state in localStorage
//             alert("Login Successful");
//             navigate("/");
//           } else {
//             alert(data.message);
//           }
//         } catch (error) {
//           console.error("Error during signin:", error.message);
//         }
//       };
    
//       const handleSubmit =async (event) => {
//         event.preventDefault();
//         if (!email || !password) {
//           alert("Please fill in the email and password");
//         } else {
//           Signin(email, password);
//         }
//       };

//     return (
//         <div className="bg-sky-100 flex justify-center items-center h-screen">
//             <div className="w-1/2 h-screen hidden lg:block">
//                 <img
//                     src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
//                     alt="Placeholder Image"
//                     className="object-cover w-full h-full"
//                 />
//             </div>
//             <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
//                 <h1 className="text-4xl font-semibold mb-4 text-center ">Admin Login</h1>
//                 <form onSubmit={handleSubmit} method="POST">
//                     <div className="mb-4 bg-sky-100">
//                         <label htmlFor="email" className="block text-gray-600">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                             autoComplete="off"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-800">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                             autoComplete="off"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} 
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
//                          >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
