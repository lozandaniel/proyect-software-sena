function CustomButton({ className, children, ...rest }) {
  return (
    <button
      className={`my-10 items-center rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-primaryColor/50 ${className}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomButton
