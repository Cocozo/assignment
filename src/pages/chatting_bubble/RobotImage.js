import "./chatting_bubble_style.css";


function RobotImage(props){
    const { isFirst } = props;

    if (isFirst)
      return (<img src="model_img.png" alt="" className="robot-image" />);
    else 
      return (<div className="robot-image" />);
}

export default RobotImage