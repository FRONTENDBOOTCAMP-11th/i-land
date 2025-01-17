import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default function MoveScroll() {
  return(
    <nav className="flex flex-col text-white text-center">
      <Link to="header" smooth={true} duration={500} className="">
        <button className="w-[80px] h-[30px] bg-point-blue hover:bg-point-red rounded-t-3xl">
          TOP
        </button>
      </Link>
        <hr className="border-t-[3px]"></hr>
      <Link to="footer" smooth={true} duration={500}>
        <button className="w-[80px] h-[30px] bg-point-blue hover:bg-point-red rounded-b-3xl">
          BOTTOM
        </button>
      </Link>
    </nav>
  )
}