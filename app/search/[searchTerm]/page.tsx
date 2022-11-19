import React from 'react';

type PageProps = {
  params: {
    searchTerm?: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const searchData = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=f30f1f1eeb48befa054321591fe2a5c7779a92382ad598c3f0bf45d7d7b83c46`
  );

  const data: SearchResult = await res.json();

  return data;
};

const SearchResult = async ({ params: { searchTerm } }: PageProps) => {
  const searchResult = await searchData(searchTerm || 'javascript');

  return (
    <div style={{ paddingTop: '20px' }}>
      <p>You searched for: {searchTerm}</p>
      <ol>
        {searchResult.organic_results.map((result) => (
          <li key={result.position} style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {result.position}. {result.title}
            </p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;
