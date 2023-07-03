import { InputHTMLAttributes } from 'react'

interface TextAreaInteface extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  register?: any
}

export default function TextArea({
  label,
  register,
  ...rest
}: TextAreaInteface) {
  return (
    <label className="block">
      <span className="mb-1 block font-sec">{label}</span>
      <textarea
        className="h-32 w-full resize-none rounded border border-slate-300 bg-[#F9FAFB] px-2.5 py-2 outline-none"
        {...rest}
        {...register}
      />
    </label>
  )
}
