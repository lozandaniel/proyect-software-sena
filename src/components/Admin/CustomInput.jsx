function CustomInput({ id, label, styleLabel, type, value, ...rest }) {
  return (
    <div>
      <label className={`my-2 ${styleLabel}`} htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-md border bg-gray-50 p-2.5 text-sm outline-none focus:border-blue-500"
        id={id}
        name={id}
        type={type}
        value={value}
        {...rest}
      />
    </div>
  )
}

export default CustomInput
