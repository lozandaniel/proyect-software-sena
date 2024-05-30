function InputCategory({ className, children }) {
  /*  */
  return (
    <div
      className={`inline-flex justify-center items-center font-sm rounded-full py-1 text-center w-max px-2 ${className}`}
    >
      {children}
    </div>
  )
}

export default InputCategory
