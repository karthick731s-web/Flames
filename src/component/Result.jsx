import {useLocation} from "react-router-dom";
export const Result = () => {
  const location = useLocation();
  const { name1, name2 } = location.state || {};
    if (!name1 || !name2) {
    return <h1>No Data</h1>;
  }
  let k = name1.toLowerCase().replace(/\s/g, "");
  let q = name2.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < k.length; i++) {
    let index = q.indexOf(k[i]);
    if (index !== -1) {
      q = q.replace(k[i], "");
      k = k.replace(k[i], "");
      i--;
    }
  }

  let c = k.length + q.length;

  let s = ["F", "L", "A", "M", "E", "S"];
  let j = 0;

  while (s.length > 1) {
    j = (j + c - 1) % s.length;
    s.splice(j, 1);
  }

  const FLAMES = {
    F: "Friends",
    L: "Love",
    A: "Affection",
    M: "Marriage",
    E: "Enemies",
    S: "Siblings"
  };
  const icons = {
  Friends: "🤝",
  Love: "❤️",
  Affection: "🥰",
  Marriage: "💍",
  Enemies: "⚡",
  Siblings: "👫"
};

const result = FLAMES[s[0]];


  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white p-6">
    
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-center space-y-6">
      
      <h1 className="text-3xl font-bold tracking-wide text-pink-400">
        FLAMES Result 🔥
      </h1>

      <div className="space-y-2">
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-white">{name1}</span>
          <span className="mx-3 text-2xl animate-pulse">{icons[result]}</span>
          <span className="font-semibold text-white">{name2}</span>
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-6 rounded-xl shadow-lg">
        <p className="text-sm uppercase tracking-widest opacity-80">
          Relationship
        </p>
        <h2 className="text-4xl font-extrabold mt-2">
          {FLAMES[s[0]]}
        </h2>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-4 px-6 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
      >
        Try Again
      </button>

    </div>
  </div>
</>
  );
};
