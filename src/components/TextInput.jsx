export default function TextInput({ label, register, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1 block font-sec">{label}</span>
      <input
        className="w-full rounded border border-slate-300 bg-[#F9FAFB] px-2.5 py-2 outline-none"
        {...rest}
        {...register}
      />
    </label>
  )
}
