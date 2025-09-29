import DropBox from "./DropBox";
export default function Home() {
  return (
   <div>
        <div>
          <div className="lg:text-5xl text-lg lg:mt-44 mt-32 text-center">
            Turn raw files into ready-to-share insights
          </div>
          <div className="text-center mx-5 lg:mt-3 mt-1 lg:text-xl text-md">
            Join the world&apos;s most widely adopted AI-powered developer platform.
          </div>
          <div>
            <DropBox />
          </div>
        </div>
   </div>
  );
}
