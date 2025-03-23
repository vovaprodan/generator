import React, { useState, useEffect } from "react";

export const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null); // Початковий стан null

  // Функція для отримання цитати з API
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "tnnn81YhgX023CVj7uNVzQ==UTRm3tAC94CLgHJb" }
      });
      const data = await response.json();
      setQuote(data[0]); // Збереження об'єкта цитати
    } catch (error) {
      console.error("Помилка отримання цитати:", error);
    }
  };

  // Виконуємо запит при завантаженні сторінки
  useEffect(() => {
    fetchQuote();
  }, []);
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Генератор випадкових цитат</h2>
      {quote ? <p>{quote.quote} — {quote.author}</p> : <p>Завантаження...</p>}
      <button onClick={fetchQuote} style={{ marginTop: "10px" }}>
        Отримати нову цитату
      </button>
    </div>
  );
};