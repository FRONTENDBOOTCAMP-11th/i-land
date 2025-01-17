import { Link } from 'react-scroll';


export default function MoveScroll() {
  return(
    <nav className="flex flex-col text-center gap-[3px]">
      <Link to="header" smooth={true} duration={500} className="">
        <button className="text-gray3 w-[80px] h-[40px] border border-gray2 bg-white hover:bg-point-blue hover:border-none hover:text-white rounded-t-xl">
          TOP
        </button>
      </Link>
      <Link to="footer" smooth={true} duration={500}>
        <button className="text-gray3 w-[80px] h-[40px] border border-gray2 bg-white hover:bg-point-blue hover:border-none hover:text-white rounded-b-xl">
          BOTTOM
        </button>
      </Link>
    </nav>
  )
}