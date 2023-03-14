export default function Display({input, setInput, output}) {
  return (
    <div className="display">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="text" className="input-field" value={output} readOnly />
      </div>
  );
}
