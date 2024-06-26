import LoginForm from "@/component/LoginForm";
export default function AdminLoginPage() {
  return (
    <div className="min-h-dvh bg-lime-50 flex flex-col items-center justify-center gap-5 ">
      <h1>Admin Login</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
