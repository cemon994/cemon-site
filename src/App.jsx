import { useState } from "react";

function App() {
  const [sold, setSold] = useState(1250);
  const [method, setMethod] = useState("USDT");
  const [amount, setAmount] = useState("");

  const total = 5000;
  const remaining = total - sold;
  const percentage = (sold / total) * 100;

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>

      <div style={contentWrap}>
        <div style={cardStyle}>
          <div style={badgeStyle}>PRESALE LIVE</div>

          <h1 style={titleStyle}>CEMON PRESALE</h1>
          <p style={subtitleStyle}>Participate using TRX or USDT</p>

          <div style={statsRow}>
            <div style={statBox}>
              <div style={statLabel}>Sold</div>
              <div style={statValue}>{sold}</div>
            </div>

            <div style={statBox}>
              <div style={statLabel}>Remaining</div>
              <div style={statValue}>{remaining}</div>
            </div>

            <div style={statBox}>
              <div style={statLabel}>Progress</div>
              <div style={statValue}>{percentage.toFixed(1) + "%"}</div>
            </div>
          </div>

          <div style={barOuter}>
            <div
              style={{
                ...barInner,
                width: percentage + "%",
              }}
            />
          </div>

          <div style={supplyText}>
            {sold} / {total}
          </div>

          <div style={methodRow}>
            <button
              onClick={() => setMethod("USDT")}
              style={method === "USDT" ? activeMethodButton : methodButton}
            >
              Buy with USDT
            </button>

            <button
              onClick={() => setMethod("TRX")}
              style={method === "TRX" ? activeMethodButton : methodButton}
            >
              Buy with TRX
            </button>
          </div>

          <div style={panelStyle}>
            <div style={panelTitle}>{method} Purchase</div>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={"Enter " + method + " amount"}
              style={inputStyle}
            />

            <button style={connectButton}>Connect Wallet</button>
            <button style={buyButton}>Buy with {method}</button>
          </div>

          <button onClick={() => setSold(sold + 50)} style={testButton}>
            Add Test Sale
          </button>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/logo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "rgba(8, 15, 30, 0.72)",
  backdropFilter: "blur(2px)",
};

const contentWrap = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const cardStyle = {
  width: "100%",
  maxWidth: "760px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  textAlign: "center",
  color: "white",
};

const badgeStyle = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(139,92,246,0.22)",
  color: "#e9ddff",
  fontSize: "13px",
  fontWeight: "bold",
  marginBottom: "18px",
};

const titleStyle = {
  margin: "0 0 10px",
  fontSize: "42px",
  lineHeight: 1.1,
};

const subtitleStyle = {
  margin: "0 0 28px",
  color: "#d8e0ef",
  fontSize: "17px",
};

const statsRow = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  marginBottom: "22px",
};

const statBox = {
  background: "rgba(30,41,59,0.88)",
  borderRadius: "16px",
  padding: "18px",
};

const statLabel = {
  color: "#b7c3d8",
  fontSize: "14px",
  marginBottom: "8px",
};

const statValue = {
  fontSize: "24px",
  fontWeight: "bold",
};

const barOuter = {
  width: "100%",
  height: "20px",
  background: "rgba(51,65,85,0.95)",
  borderRadius: "999px",
  overflow: "hidden",
  marginBottom: "10px",
};

const barInner = {
  height: "100%",
  background: "linear-gradient(90deg, #8b5cf6, #22c55e)",
  transition: "0.3s ease",
};

const supplyText = {
  color: "#d8e0ef",
  fontSize: "14px",
  marginBottom: "24px",
};

const methodRow = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginBottom: "18px",
};

const methodButton = {
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background: "rgba(30,41,59,0.92)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const activeMethodButton = {
  ...methodButton,
  background: "#8b5cf6",
};

const panelStyle = {
  background: "rgba(15,23,42,0.92)",
  borderRadius: "18px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "18px",
};

const panelTitle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "4px",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "#111827",
  color: "white",
  outline: "none",
  fontSize: "15px",
};

const connectButton = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.20)",
  background: "transparent",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const buyButton = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  background: "#22c55e",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const testButton = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  background: "#f59e0b",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;