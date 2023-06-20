export default function FormInput({ placeholder, type }) {
  return (
    <input
      className="bg-slate rounded-lg border border-slate-300 bg-[#F9FAFB] px-2.5 py-2 font-main outline-none"
      type={type}
      placeholder={placeholder}
    />
  )
}
