const http = require('http');

const server = http.createServer((req, res) => {
  const URL = req.url;
  if (URL === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h2>İndex Sayfasına Hoşgeldiniz</h2>');
  } else if (URL === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

    res.write('<h2>Hakkımızda Sayfasına Hoşgeldiniz</h2>');
  } else if (URL === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h2>İletişim Sayfasına Hoşgeldiniz</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>404 PAGE NOT FOUND</h1>');
  }
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Sunucu port ${PORT} de başlatıldı`);
});
