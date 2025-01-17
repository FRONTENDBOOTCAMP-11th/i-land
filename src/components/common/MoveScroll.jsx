import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default function MoveScroll() {
  return(
    <nav className="flex flex-col bg-point-blue text-white font-bold text-center gap-[10px] p-[10px] rounded-3xl">
      <Link to="header" smooth={true} duration={500} className="">TOP</Link>
      <hr className="border-t-[3px]"></hr>
      <Link to="footer" smooth={true} duration={500}>BOTTOM</Link>
    </nav>
  )
}