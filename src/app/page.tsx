import Button from "@/components/Button";
import NavBarButton from "@/components/NavBarButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button title="About us" />
        <NavBarButton title="Nav button 01" />
      </div>
    </main>
  );
}
