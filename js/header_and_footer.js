/*ヘッダー*/

let header = document.getElementById('header');

let Bigname = document.createElement('h1');
Bigname.innerHTML = '<a id="bigname" href="https://sayoi341.github.io/">Minecraft server</a>';
header.insertBefore(Bigname, null);

let Mininame = document.createElement('ul');
header.insertBefore(Mininame, null);

let linakami1 = document.createElement('li');
let linakami2 = document.createElement('li');
let linakami3 = document.createElement('li');
let linakami4 = document.createElement('li');

linakami1.setAttribute('class', 'header-links');
linakami2.setAttribute('class', 'header-links');
linakami3.setAttribute('class', 'header-links');
linakami4.setAttribute('class', 'header-links');

linakami1.innerHTML = '<a href="https://sayoi341.github.io/about_this_server/">鯖について</a>';
linakami2.innerHTML = '<a href="#">写真</a>';
linakami3.innerHTML = '<a href="#">入り方</a>';
linakami4.innerHTML = '<a href="#">お問い合わせ</a>';

Mininame.insertBefore(linakami1, null);
Mininame.insertBefore(linakami2, null);
Mininame.insertBefore(linakami3, null);
Mininame.insertBefore(linakami4, null);


/* フッター*/

let footer = document.getElementById('footer');

let twitter = document.createElement('h2');
twitter.innerHTML = '<a href="https://twitter.com/_Emiya_Saber" target="_blank" rel="noopener noreferrer">twitter</a>';

footer.insertBefore(twitter, null);