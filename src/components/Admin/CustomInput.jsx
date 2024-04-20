function CustomInput({ id, label, ...rest }) {
  return (
    <div>
      <label className="my-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500"
        {...rest}
      />
    </div>
  )
}

export default CustomInput
