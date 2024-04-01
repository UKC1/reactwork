import './Button.css';
const Button = ({text, color,a,b,c}) => {
  return(
    // <button style={{ backgroundColor : color }} className = "btn">{a}버튼</button>
    <button style={{color : color}} className = "btn">{text}버튼</button>
  )
}
export default Button;