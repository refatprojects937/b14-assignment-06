import BookCard from "../shared/BookCard";
import type { IBook } from "../../types/books.type";
import React from "react";

const getBooks = async () => {
  try{

    const response = await fetch(
      "http://localhost:3000/booksdata.json");
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching books data:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto  px-4">
      {/* Section Heading */}
      <div className="mb-10 pl-6 ">
        

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl mt-3 max-w-2xl  pt-12 ">
          THE LIBRARY
        </h2>

        <p className=" max-w-2xl  text-slate-500">
          Twelve lifts converting every major muscle group
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;