
import BookSearchItem from './BookSearchItem';
import './BookSearch.css';

export default function BookSearchList({ books }) {
  if (!books || books.length === 0) {
    return (
      <div className="book-list-empty">
        <svg className="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <p>검색된 도서 목록이 없습니다.</p>
        <span className="empty-sub">다른 검색어로 책을 찾아보세요.</span>
      </div>
    );
  }

  return (
    <div className="book-list-grid">
      {books.map((book, idx) => (
        <BookSearchItem key={book.isbn || book.link || idx} book={book} />
      ))}
    </div>
  );
}
