export default function CardSkeleton() {
  return (
    <div className="relative animate-pulse bg-slate-50">
      <div className="flex cursor-pointer flex-col rounded shadow-md lg:flex-row">
        <div className="relative grid h-[300px] w-full place-items-center overflow-hidden bg-slate-100 text-slate-200 lg:h-[200px] lg:w-[200px]">
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
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>

        <div className="grid h-fit flex-1 grid-cols-7 gap-3 p-4 font-sec">
          <div className="col-span-4 col-start-1 h-3 rounded bg-slate-100"></div>
          <div className="col-span-1 col-start-1 h-3 rounded bg-slate-100"></div>
          <div className="col-span-3 col-start-1 h-3 rounded bg-slate-100"></div>
          <div className="col-start-1 h-3 rounded bg-slate-100"></div>
          <div className="col-span-2 col-start-1 h-3 rounded bg-slate-100"></div>
        </div>
      </div>
      <div className="absolute right-3 top-3 z-40 cursor-pointer rounded bg-slate-100 p-1.5 text-slate-200 transition">
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  )
}
