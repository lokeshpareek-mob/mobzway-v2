"use client";


export default function NotFound() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh",
      textAlign:"center"
    }}>
      <h1 style={{ fontSize:"60px", marginBottom:"10px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>

      <a href="/" style={{
        marginTop:"20px",
        padding:"10px 20px",
        background:"#0070f3",
        color:"#fff",
        borderRadius:"5px",
        textDecoration:"none"
      }}>
        Go Home
      </a>
    </div>
  );
}
