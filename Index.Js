async function connect(){
  try {
    await window.chia.request({ method: "connect" });
    const publicKeys = await window.chia.request({ method: "getPublicKeys" });
    // synthetic public keys
    // more details, please visit: https://docs.goby.app/example
    console.log(publicKeys)
    document.getElementById('connect').innerHTML = 'connected';
    window.location.replace("index5.html");
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
  
}
function send() {
  const params = {
  "to": "xch1ymnduam0halenpw5kqm8s2l6qzjsva65l4xkhaszse579zzp79mqzyp7sf",
  "amount": "000008",
  "memos": ["0x68656c6c6f2063686961", ], // hex string, "hello chia".encode("utf-8)
  "assetId": "",
};
window.chia.request({ method: "transfer", params });
function toHex(txt) {
    const encoder = new TextEncoder();
    return Array
        .from(encoder.encode(txt))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
}
toHex('hello world')

}
function lol(){
const params = {
  type: 'cat',
  options: {
    assetId: '6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589',
    symbol: 'USDS',
    logo: 'https://static.goby.app/image/token/usds/USDS_32.png'
  }
}
window.chia.request({ method: 'walletWatchAsset', params })
}