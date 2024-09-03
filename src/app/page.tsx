import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import NavBarButton from "@/components/NavBarButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="my-12">
          <Accordion
            items={[
              {
                id: 1,
                title:
                  "Lorem ipsum dolor sit amet consectetur. Ac posuere accumsan?",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                id: 2,
                title:
                  "Lorem ipsum dolor sit amet consectetur. Ac posuere accumsan?",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ]}
          />
        </div>
        <div className="self-start">
          <Button title="CTA Button" />
        </div>
      </div>
    </main>
  );
}
