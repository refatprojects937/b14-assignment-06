
import Image from "next/image";
import Link from "next/link";
import type { IBook } from "../../types/books.type";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">
      {/* Workout Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-auto sm:min-h-[340px] sm:w-[320px]">
        <Image
          src={book.image}
          alt={book.name}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 shadow">
          {book.difficulty}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-bold text-white">
          ⭐ {book.rating}
        </span>

        <h2 className="absolute bottom-5 left-5 right-5 text-2xl font-extrabold text-white">
          {book.name}
        </h2>
      </div>

      {/* Workout Details */}
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-7">
        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {(book.muscleGroups ?? []).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-slate-600 sm:text-base">
          {book.description}
        </p>

        {/* Workout Statistics */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Duration</p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {book.duration}
              <span className="ml-1 text-xs font-medium">min</span>
            </p>
          </div>

          <div className="rounded-xl bg-orange-50 p-3">
            <p className="text-xs text-orange-700">Calories</p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {book.caloriesBurned}
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 p-3">
            <p className="text-xs text-emerald-700">Sets</p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {book.sets}
            </p>
          </div>

          <div className="rounded-xl bg-violet-50 p-3">
            <p className="text-xs text-violet-700">Reps</p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {book.reps}
            </p>
          </div>
        </div>

        {/* Equipment */}
        <div className="mt-5 flex items-start gap-3 border-t border-slate-100 pt-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl">
            🏋️
          </span>

          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-800">
              Equipment Needed
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {book.equipment}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
          <Link
            href={`/books/${book.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
          >
            View Details <span aria-hidden="true">→</span>
          </Link>

          <span className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600">
            {book.difficulty} Workout
          </span>
        </div>
      </div>
    </article>
  );
};

export default ListedBooksCard;
