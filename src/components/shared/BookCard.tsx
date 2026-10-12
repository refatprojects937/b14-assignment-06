
import Image from "next/image";
import type { IBook } from "../../types/books.type";
import Link from "next/link";


interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Workout Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-800 shadow">
          {book.difficulty}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-gray-900/80 px-3 py-1 text-sm font-bold text-white">
          ⭐ {book.rating}
        </span>

        <div className="absolute bottom-3 left-4 right-4">
          <h2 className="text-xl font-bold text-white drop-shadow-md">
            {book.name}
          </h2>
        </div>
      </div>

      {/* Workout Details */}
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          {book.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              {muscle}
            </span>
          ))}
        </div>

        <p className="min-h-[60px] text-sm leading-6 text-gray-600">
          {book.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-gray-50 py-3">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">
              {book.duration}
            </p>
            <p className="text-xs text-gray-500">Minutes</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">
              {book.caloriesBurned}
            </p>
            <p className="text-xs text-gray-500">Calories</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">
              {book.sets}
            </p>
            <p className="text-xs text-gray-500">Sets</p>
          </div>
        </div>

        {/* Equipment */}
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <span className="text-lg">🏋️</span>
          <div>
            <p className="font-semibold text-gray-800">Equipment</p>
            <p>{book.equipment}</p>
          </div>
        </div>

        {/* Reps */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Repetitions</p>
            <p className="font-bold text-gray-900">{book.reps} reps</p>
          </div>

           
           <Link
  href={`/books/${book.id}`}
  className="group-hover:bg-emerald-700 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors"
>
  View Details <span aria-hidden="true">→</span>
              </Link>

        </div>
      </div>
    </article>
  );
};

export default BookCard;
