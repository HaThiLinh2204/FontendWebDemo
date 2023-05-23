// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./RegisterAccout.css";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with the form data (e.g., send it to the server)
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Reset form fields
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="register-page">
//       <div className="register-form-container">
//         <h1 className="title"> Register Account</h1>

//         <form>
//           <div>
//             <label htmlFor="name">Tên:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={handleNameChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Mật khẩu:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <button type="submit">Đăng kí</button>
//         </form>
//       </div>
//     </div>
//   );
// }
