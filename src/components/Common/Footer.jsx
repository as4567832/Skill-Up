import { Link } from "react-router-dom";
import '../../components/core/homepage/Section1.css'
import {
  FooterLink,
  ResourceLink,
  Plans,
  Community,
  Subjects,
  Languages,
  Careers
} from "../../Data/footerLinks";
function Footer() {
  return (
    <div className="flex flex-wrap footerbg gap-20 text-white p-8 justify-between ">
      <div className="">
        <div>
          <h1 className="text-xl font-bold text-white">Company</h1>
          <div className="pt-1">
            {FooterLink.map((company) => (
              <p className="pt-1" key={company}>
                <Link to={company.path}>{company.name}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-white" >Resources</h1>
        <div>
          {ResourceLink.map((resources) => (
            <p className="pt-1"  key={resources}>{resources.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">Plans</h1>
        <div>
          {Plans.map((plans) => (
            <p className="pt-1"  key={plans}>{plans.name}</p>
          ))}
        </div>

        <div className="my-4">
          <h1 className="text-xl font-bold text-white">Community</h1>
          <div>
            {Community.map((community) => (
              <p className="pt-1"  key={community}>{community.name}</p>
            ))}
          </div>
        </div>
      </div>

        <div>
            <h1 className="text-xl font-bold text-white">Subjects</h1>
          {Subjects.map((subjects) => (
            <p className="pt-1"  key={subjects}>{subjects.name}</p>
          ))}
        </div>
        <div>
           <h1 className="text-xl font-bold text-white">Languages</h1>
           {Languages.map((languages)=>(
            <p className="pt-1"  key={languages}>{languages.name}</p>
           ))}
           <div></div>
        </div>
      <div>
        <h1 className="text-xl font-bold text-white">Career Building</h1>
        {Careers.map((link,index)=>(
            <p className="pt-1"  key={index}><Link to={link.path} >{link.name}</Link></p>
        ))}
      </div>
    </div>
  );
}
export default Footer;
