import PresentationCard from "./components/presentation-card";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-black p-6 md:p-16">
      <div className="w-full max-w-screen-md">
        <PresentationCard />
      </div>
    </div>
  );
}
