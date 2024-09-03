import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import NavBarButton from "@/components/NavBarButton";

export default function Home() {
  const accordionItems = [
    {
      id: 1,
      title: "What do we do?",
      content:
        "We are cottage enthusiasts. We love to live in the great outdoors and enjoy the peace and quiet of the woods. We are passionate about sustainability and are committed to protecting the environment. We believe in the power of community and we work together to create a better world for all.",
    },
    {
      id: 2,
      title: "What makes us different?",
      content:
        "We personally stay in every cottage you can find on our website. This gives us the absolute confidence that we provide the highest quality cottages. That or your money back.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-4 mb-12">
        <h1 className="self-start text-green-100 mt-12">
          Welcome to Cottage Retreat
        </h1>
        <img
          src="https://storage.ziggyaust.in/8df366f3f2aacf21b18189ebe92239c8.jpeg"
          alt="logo"
          className="self-start"
        />
        <div className="my-12">
          <Accordion items={accordionItems} />
        </div>
        <div className="gap-4 flex flex-col  justify-center">
          <h2>We help you find the right cottage for the right job</h2>
          <p className="copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="columns-1 gap-2 lg:gap-2 gap-y-2 sm:columns-2 lg:columns-3 xl:columns-4">
          <img
            src="https://storage.ziggyaust.in/2f4085d7d4a3d592250a5c61dabbbc12.jpeg"
            alt="Image 1"
            className="w-full h-auto object-cover mt-2 lg:mt-0"
          />

          <img
            src="https://storage.ziggyaust.in/3f49280d9ba42db7c9e0faa5bd026490.jpeg"
            alt="Image 2"
            className="w-full h-auto object-cover mt-2"
          />

          <img
            src="https://storage.ziggyaust.in/59d3bef91750968a000c07a3512c3afd.jpeg"
            alt="Image 3"
            className="w-full h-auto object-cover mt-2"
          />

          <img
            src="https://storage.ziggyaust.in/61d223b2dd8359b6328ec3c197254db1.jpeg"
            alt="Image 4"
            className="w-full h-auto object-cover mt-2"
          />
          <img
            src="https://storage.ziggyaust.in/e510a286b22e744f67f6b72712826329.jpeg"
            alt="Image 5"
            className="w-full h-auto object-cover mt-2"
          />
          <img
            src="https://storage.ziggyaust.in/f1d6ce79ef02da12a51ae6f87143ea3a.jpeg"
            alt="Image 6"
            className="w-full h-auto object-cover mt-2"
          />
        </div>

        <div className="self-start">
          <Button title="CTA Button" />
        </div>
      </div>
    </main>
  );
}
