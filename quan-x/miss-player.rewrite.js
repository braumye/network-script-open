let body = $response?.body

if (body && body.includes('</body>')) {
  $done({ body: body.replace('</body>', '<script src="/js/miss-player.js" defer></script></body>') })
} else {
  $done({})
}
