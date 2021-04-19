import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PagintationButtons() {
  const router = useRouter();

  const index = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {index >= 10 && (
        <Link
          href={`/search?inputRef=${router.query.inputRef}&start=${index - 10}`}
        >
          <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?inputRef=${router.query.inputRef}&start=${index + 10}`}
      >
        <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PagintationButtons;
