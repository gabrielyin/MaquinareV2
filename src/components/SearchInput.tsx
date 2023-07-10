import { InputHTMLAttributes } from 'react'

interface SearchInputInterface extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string
}

export default function SearchInput({
  classname,
  ...rest
}: SearchInputInterface) {
  return (
    <label
      className={`mx-auto flex w-full gap-2 rounded-lg border border-slate-300 bg-[#F9FAFB] p-2.5 font-ter md:mt-6 md:max-w-sm ${classname}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        className="flex-1 bg-transparent outline-none"
        placeholder="Pesquisar..."
        {...rest}
      />
    </label>
  )
}
