"use client";
import { useRouter } from "next/navigation";
import * as actions from "@/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await actions.login(formData);
    if ("session" in response) {
      document.cookie = `Gardener=${response.session.access_token}; path=/; max-age=3600; secure; samesite=strict`;
      router.push("/dashboard");
    }
    console.log(response);
  }
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <form
        className="flex flex-col justify-center gap-4 items-center"
        onSubmit={handleLogin}
      >
        <div>
          <label>Email</label>
          <Input type="text" name="email" />
        </div>
        <div>
          <label>Password</label>
          <Input type="password" name="password" />
        </div>
        <Button variant="customLogin" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
