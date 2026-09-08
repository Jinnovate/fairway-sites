export default function MobilePreview() {
  return (
    <main style={{ minHeight:'100vh', background:'#191917', display:'grid', placeItems:'center', padding:'32px 16px', fontFamily:'Arial, sans-serif' }}>
      <div>
        <div style={{ color:'#f4f0e4', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12, fontSize:12, letterSpacing:'.12em', textTransform:'uppercase' }}>
          <span>Dream First / Mobile preview</span><span>390 × 844</span>
        </div>
        <div style={{ width:410, maxWidth:'calc(100vw - 32px)', padding:9, borderRadius:30, background:'#090909', boxShadow:'0 24px 70px rgba(0,0,0,.45)' }}>
          <div style={{ width:90, height:18, background:'#090909', borderRadius:'0 0 14px 14px', position:'absolute', left:'50%', transform:'translateX(-50%)', zIndex:3 }} />
          <iframe title="Dream First website mobile preview" src="/" style={{ display:'block', width:'100%', height:844, maxHeight:'calc(100vh - 105px)', border:0, borderRadius:22, background:'#f4f0e4' }} />
        </div>
      </div>
    </main>
  );
}

