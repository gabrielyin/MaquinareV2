export default function ProductCardSkeleton() {
  return (
    <div className="keen-slider__slide flex h-[350px] w-full animate-pulse flex-col rounded-lg border">
      <div className="relative grid h-[200px] w-full place-items-center bg-slate-100 text-slate-200">
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

      <section className="flex flex-1 flex-col justify-between px-3 py-3 font-sec">
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 col-start-1 h-3 rounded bg-slate-100"></div>
          <div className="col-span-2 col-start-1 h-3 rounded bg-slate-100"></div>
        </div>

        <div className="h-3 w-20 rounded bg-slate-100"></div>
      </section>
    </div>
  )
}
