
"use client";

import { useContext, useState } from "react";
import BookCard from "@/components/shared/BookCard";
import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/books.type";

type SortOption = "rating" | "duration" | "calories";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const sortBooks = (books: IBook[] | undefined): IBook[] => {
    const sorted = [...(books ?? [])];

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sorted.sort((a, b) => b.duration - a.duration);
    } else {
      sorted.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    return sorted;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-emerald-600">
            Your Fitness Journey
          </p>

          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            My Workout Plans
          </h1>

          <p className="mt-3 text-slate-500">
            Manage your favorite workouts in one place.
          </p>
        </div>

        {/* Sorting */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Sort Your Workouts
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose how you want to organize your workouts.
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortOption)
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-500 sm:w-64"
            aria-label="Sort workouts"
          >
            <option value="rating">Highest Rating</option>
            <option value="duration">Longest Duration</option>
            <option value="calories">Most Calories Burned</option>
          </select>
        </div>

        {/* My Workouts */}
        <section className="mb-14">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">
              My Workouts
            </h2>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              {sortedReadBooks.length} workouts
            </span>
          </div>

          {sortedReadBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedReadBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-4xl">🏋️</p>
              <h3 className="mt-3 text-lg font-bold text-slate-800">
                No workouts added yet
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Add workouts to see them here.
              </p>
            </div>
          )}
        </section>

        {/* Wishlist */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">
              My Wishlist
            </h2>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
              {sortedWishlist.length} workouts
            </span>
          </div>

          {sortedWishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedWishlist.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-4xl">💚</p>
              <h3 className="mt-3 text-lg font-bold text-slate-800">
                Your wishlist is empty
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Add your favorite workouts to your wishlist.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ListedBooks;
