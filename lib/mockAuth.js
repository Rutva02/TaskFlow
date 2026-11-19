
export default function mockLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "demo@taskflow.com" &&
        password === "password123"
      ) {
        resolve({
          success: true,
          message: "Login successful! Welcome to TaskFlow.",
        });
      } else {
        reject(
          new Error("Invalid email or password. Please try again.")
        );
      }
    }, 2000);
  });
}
