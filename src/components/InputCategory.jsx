function InputCategory({ text, bgColor, textColor }) {
  /*  */
  return (
    <span
      className={`text-[${textColor}] bg-[${bgColor}]/20 font-semibold rounded-full text-xs py-1.5 text-center w-max px-2.5 `}
    >
      {text}
    </span>
  )
}

export default InputCategory
