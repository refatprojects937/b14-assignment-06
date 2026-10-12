
"use client";

import { useEffect, useState } from "react";
import BookCard from "../../components/shared/BookCard";
import type { IBook } from "../../types/books.type";

export default function BooksPage() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/booksdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load workout data");
        }
        return response.json();
      })
      .then((data: IBook[]) => setBooks(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-10 text-center">Loading workouts...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Workouts
          </h1>
          <p className="mt-3 text-gray-500">
            Choose your workout and achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}
