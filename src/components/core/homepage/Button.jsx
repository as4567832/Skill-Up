import { Link } from "react-router-dom";
import './css/Button.css'
function Button({children,active,linkedTo}){  
return(
<Link to={linkedTo}>
<div  className={`${active ? "tryButtonActive  px-[28px] py-[14px] w-[240px] rounded-md hover:bg-[#4437B8] transition-all duration-200 bg-[#5A4BDA] items-center text-white font-semibold text-[17px]" :"tryButtonNotActive hover:bg-[#007BFF] hover:text-white hover:border-transparent transition-all duration-200 ease-in-out "}`}>
    {children}
</div>
</Link> 
)
}
export default Button;