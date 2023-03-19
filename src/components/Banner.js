export default function Banner() {
  return (
    <div className="fixed inset-x-0 top-0 flex justify-center">
      <div className="pointer-events-none max-w-5xl animate ease-in-out pt-6">
        <div className="pointer-events-auto flex flex-row items-center justify-between gap-x-6 ring-white/50 ring-[0.5px] bg-gray-100/5 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
          <p className="text-sm leading-6 text-white">
            <div className="flex flex-row gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="text-gray-200 ">
                Our Smart contracts have not been audited yet, use moonyield at
                your own risk !
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
