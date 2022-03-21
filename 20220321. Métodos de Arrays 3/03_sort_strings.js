let people = ['joao', 'ana', 'carlos', 'beatriz'];

people.sort();

console.log(people);

people = ['Joao', 'ana', 'carlos', 'beatriz'];

people.sort();

console.log(people);

people = ['João', 'Ana', 'carlos', 'beatriz'];

people.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(people);

people.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(people);