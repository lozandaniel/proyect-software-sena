function InputCategory({ icon, title, className }) {
  /*  */
  return (
    <div
      className={`inline-flex justify-center items-center font-sm rounded-full py-1.5 text-center w-max px-2.5 ${className}`}
    >
      {icon}
      <span>{title}</span>
    </div>
  )
}

export default InputCategory
