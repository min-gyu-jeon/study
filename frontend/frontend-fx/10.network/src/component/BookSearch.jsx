import React, { useState } from 'react';
import axios from "axios";
import BookSearchList from './BookSearchList';
import './BookSearch.css';

export default function BookSearch() {
  const [keyword, setKeyword] = useState('');
  const [books, setBooks] = useState([]);

  const clientId = 'XdIuj58Mx5Y_tSyAkifp';
  const clientSecret = 'CHANGE_ME';

  const searchBook = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `/naver/v1/search/book.json?query=${(keyword)}&display=100`,
      {
        headers: {
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientSecret,
        },
      }
    );

    setBooks(response.data.items);
  };

  return (
    <div className="book-search-container">
      <div className="book-search-header">
        <h1 className="book-search-title">Naver Book Search</h1>
        <p className="book-search-subtitle">
          네이버 Open API 도서 검색 화면 UI 데모
        </p>
      </div>

      <form onSubmit={searchBook} className="search-bar-wrapper">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색할 도서명이나 저자를 입력하세요..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          검색
        </button>
      </form>

      <BookSearchList books={books} />
    </div>
  );
}