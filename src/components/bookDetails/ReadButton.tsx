"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("read book btn triggered", book);

    // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
    setReadBooks([...readBooks, book]);
    toast.success(`You have added to Plans "${book.name}"`);
  };
  return (
    <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>
      Plans
    </button>
  );
};

export default ReadButton;