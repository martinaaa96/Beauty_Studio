//import home from "../assets/home.jpg";
//import home2 from "../assets/home2.jpg";
//import home3 from "../assets/home3.jpg";
import proba from "../assets/proba.jpg";

export default function Home() {
  return (
    <>
      <div className="w:690px h-[720px] md:h-[600px] sm:h-[400px] xs:h-[300px]">
        <div className="w:690px  h-auto ">
          <img src={proba} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}