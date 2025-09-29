interface Button {
    placeholder : string;
    onClick? : () => void | Promise<void>;
    size : "sm" | "md" | "lg";
    variant : "primary" | "secondary";
}

const variantStyles = {
  "primary" : "bg-[#5046E4] text-white transition duration-300 hover:bg-[#e0e6fe] hover:text-black",
  "secondary" : "bg-[#e0e7ff] text-[#5046E4] transition duration-300 hover:bg-blue-900 hover:text-white"
}
const sizestyles = {
"sm" : "px-2 py-1 text-sm rounded-lg",
"md" : "px-3 py-2 text-md rounded-xl",
"lg" : "px-4 py-3 text-lg rounded-xl",
}

export default function Button(props : Button){
      return (
        <button 
          type="button" 
          onClick={props.onClick} 
          className={`${variantStyles[props.variant]} ${sizestyles[props.size]}`}>
            {props.placeholder}
          </button>
      )
}