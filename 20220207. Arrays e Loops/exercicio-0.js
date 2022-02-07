const nomesDePaises = ['Brasil', 'Argentina', 'BVI', 'Nevis', 'EUA'];
console.log(nomesDePaises);

nomesDePaises.push('Colômbia');
console.log(nomesDePaises);

nomesDePaises.pop();
console.log(nomesDePaises);

nomesDePaises.unshift('México');
console.log(nomesDePaises);

nomesDePaises.shift();
console.log(nomesDePaises);

console.log(nomesDePaises[nomesDePaises.length - 1]);
console.log(nomesDePaises[1]);
console.log(nomesDePaises[2]);