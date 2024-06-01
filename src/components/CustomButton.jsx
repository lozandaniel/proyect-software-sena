function CustomButton({ className, children, ...rest }) {
  return (
    <button
      {...rest}
      type="button"
      className={`bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/50 font-medium hover:bg-primaryColor/90 items-center my-10 px-4 py-2 rounded-lg text-sm text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default CustomButton
