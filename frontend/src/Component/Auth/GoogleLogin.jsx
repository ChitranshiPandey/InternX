import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";





function GoogleLogin() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in user:", result.user);
      alert("Login Successful 🎉");
    } catch (error) {
      console.error("Firebase Auth Error:", error);
      alert(error.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="w-full flex items-center justify-center gap-2 bg-[#4285F4] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
    >
      <img
        src=""
        alt="Google Logo"
        className="w-5 h-5"
      />
      Sign in with Google
    </button>
  );
}

export default GoogleLogin;




















// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../firebase";



// function GoogleLogin() {
//   const handleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("Logged in user:", result.user);
//       alert("Login Successful 🎉");
//     } catch (error) {
//   console.error("Firebase Auth Error:", error);
//   alert(error.message);
// }

//   };

//   return (
//     <button
//       onClick={handleLogin}
//       style={{
//         padding: "10px 20px",
//         backgroundColor: "#4285F4",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Sign in with Google
//     </button>
//   );
// }

// export default GoogleLogin;
