import NavBar from "@/component/NavBar";
import PostManagement from "@/component/PostManagement";
import CreateAPost from "@/component/CreateAPost";
export default function dashboard() {
  return (
    <div className="flex flex-col items-center gap-24 bg-lime-50 min-h-lvh">
      <NavBar />
      <div className="flex flex-col items-center w-4/6 gap-10">
        <h1 className="font-extrabold text-3xl">Dashboard</h1>
        <PostManagement />
        <CreateAPost />
      </div>
    </div>
  );
}
