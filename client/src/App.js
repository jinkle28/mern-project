import './App.css';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: '',
  })
  async function handleSubmit(e) {
    e.preventDefault();
    const res =  await fetch("http://localhost:4000/transcation", {
      method: "POST",
      body: form,
    });
    console.log(res); 
  }
  const handleInput = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={form.amount}
          name="amount"
          onChange={handleInput}
          placeholder="Enter transaction amount" />

        <input
          type="text"
          value={form.description}
          name="description"
          onChange={handleInput}
          placeholder="Enter transaction details" />

        <input
          value={form.date}
          name="date"
          onChange={handleInput}
          type="date" />
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}

export default App;
