
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { IBook } from "../../../types/books.type";
import ReadButton from "../../../components/bookDetails/ReadButton";



export default function WorkoutDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadWorkout() {
      try {
        const response = await fetch("/booksdata.json");

        if (!response.ok) {
          throw new Error("Could not load workout data.");
        }

        const data: IBook[] = await response.json();
        const selectedWorkout = data.find(
          (item) => item.id === Number(id)
        );

        if (active) {
          setBook(selectedWorkout ?? null);
        }
      } catch {
        if (active) {
          setError("Workout data load করা যায়নি। আবার চেষ্টা করো।");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadWorkout();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="animate-pulse text-lg font-semibold text-emerald-600">
          Loading workout details...
        </p>
      </main>
    );
  }

  if (error || !book) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4">
        <h1 className="text-2xl font-bold text-slate-800">
          {error ? "Something went wrong!" : "Workout Not Found"}
        </h1>
        {error && <p className="text-slate-600">{error}</p>}
        <Link
          href="/books"
          className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          ← Back to Workouts
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/books"
          className="mb-6 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-900"
        >
          <span aria-hidden="true">←</span> Back to Workouts
        </Link>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="grid md:grid-cols-2">
            {/* Workout Image */}
            <div className="relative min-h-[320px] bg-slate-200 sm:min-h-[450px] md:min-h-full">
              <Image
                src={book.image}
                alt={book.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-lg">
                {book.difficulty}
              </span>

              <span className="absolute right-5 top-5 rounded-full bg-slate-950/80 px-4 py-2 font-bold text-white backdrop-blur">
                ⭐ {book.rating}
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
                  Workout Details
                </p>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                  {book.name}
                </h1>
              </div>
            </div>

            {/* Workout Information */}
            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                Your Fitness Journey
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                About This Workout
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {book.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-6">
                <h3 className="mb-3 font-bold text-slate-900">
                  Target Muscle Groups
                </h3>

                <div className="flex flex-wrap gap-2">
                  {book.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    {book.duration}
                    <span className="ml-1 text-sm font-medium">min</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-4">
                  <p className="text-sm text-orange-700">Calories</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    {book.caloriesBurned}
                    <span className="ml-1 text-sm font-medium">kcal</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-sm text-emerald-700">Sets</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    {book.sets}
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm text-violet-700">Repetitions</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    {book.reps}
                  </p>
                </div>
              </div>

              {/* Equipment */}
              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                    🏋️
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Equipment Needed</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {book.equipment}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8">
                <h2 className="text-xl font-extrabold text-slate-900">
                  How to Perform
                </h2>

                <ol className="mt-4 space-y-4">
                  {book.instructions.map((instruction, index) => (
                    <li key={instruction} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-6 text-slate-600">
                        {instruction}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/books"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Explore More Workouts <span aria-hidden="true">→</span>
              </Link>
               
               <div className="flex-2">
                <ReadButton book={book}/>
                <button className="btn btn-info gap-x-5 ">Saved</button>
               </div>



            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
