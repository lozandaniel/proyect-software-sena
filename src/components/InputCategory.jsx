function InputCategory({ className, children }) {
  return (
    <div
      className={`inline-flex w-max items-center justify-center rounded-full px-2 py-1 text-center text-sm font-semibold ${className}`}
    >
      {children}
    </div>
  )
}

export default InputCategory
