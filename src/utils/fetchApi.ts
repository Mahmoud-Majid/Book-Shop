import axios from 'axios';

export const fetchAllBooks = async (page: number = 1) => {
  const { data } = await axios.get(`https://gutendex.com/books?page=${page}`);
  return data;
};

export const fetchAuthor = async (author: string) => {
  if (!author) {
    const { data } = await axios.get(`https://gutendex.com/books/`);
    return data;
  }
  const { data } = await axios.get(
    `https://gutendex.com/books?search=${author}`
  );
  return data;
};

export const fetchBook = async (id: string) => {
  const { data } = await axios.get(`https://gutendex.com/books/${id}`);
  return data;
};
