export default function TextInput({ label, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1 block font-sec">{label}</span>
      <input
        className="w-full rounded border border-slate-500 bg-[#F9FAFB] px-2.5 py-2 outline-none"
        {...rest}
      />
    </label>
  )
}
