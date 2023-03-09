import { useState } from "react";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {isOpen && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-4 pb-4">
          <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 ring-1 ring-gray-900/10">
            <p className="text-sm leading-6 text-gray-900">
              Moonyield currently supports deposits from Avalanche only ! <br />{" "}
              More networks coming soon.
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
