export default function NotFound() {
  return (
    <div className="error">
      <h1>What are you doing here?</h1>
      <style jsx>{`
        .error {
          display: flex;
          width: 100vw;
          height: 90vh;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
