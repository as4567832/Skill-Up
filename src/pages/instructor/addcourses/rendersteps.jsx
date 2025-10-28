import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import CourseInformation from "./courseinformation";
import CourseBuilder from "./coursebuilder";

function RenderSteps() {
  const {step} = useSelector((state) => state.course);
  console.log(step);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ]

  return (
    <div className="">
      <div>
        {step ===1 &&(<CourseInformation></CourseInformation>)}
        {step===2&&(<CourseBuilder></CourseBuilder>)}
        {/* {step===3&&(<PublishForm></PublishForm>)}  */}
      </div>

    </div>
  );
}
export default RenderSteps;
