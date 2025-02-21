// Contoh JWT
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// Fungsi untuk decode JWT
function decodeJWT(token) {
  try {
    // Pisahkan token menjadi 3 bagian
    const [headerBase64, payloadBase64, signature] = token.split('.');

    // Decode header dan payload dari Base64
    const header = JSON.parse(atob(headerBase64));
    const payload = JSON.parse(atob(payloadBase64));

    return { header, payload, signature };
  } catch (error) {
    console.error("Gagal decode JWT:", error);
    return null;
  }
}

// Decode token
const decodedToken = decodeJWT(token);

// Tampilkan hasil
if (decodedToken) {
  console.log("Header:", decodedToken.header);
  console.log("Payload:", decodedToken.payload);
  console.log("Signature:", decodedToken.signature);
