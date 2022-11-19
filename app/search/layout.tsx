import Search from './Search';

// в этом подходе будет рендерится только часть с Чилдреном (та страница которую выберем Туду 1 туду2 ...)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ display: 'flex', gap: '30px' }}>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
