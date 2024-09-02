import Button from "@/components/Button";
import NavBarButton from "@/components/NavBarButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button title="About us" />
        <NavBarButton
          title="Nav button 01"
          manualTextColor={"text-green-100"}
        />
      </div>
    </main>
  );
}
