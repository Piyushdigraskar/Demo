console.log('person1; shows ticket');
console.log('person2; shows ticket');




const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    });
    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'));
    const getButter = new Promise((resolve, reject)=> resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject)=> resolve('cold-drinks'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: here is the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no,i am hungry');

    let popcorn = await getPopcorn;
     
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await  getButter;

    console.log(`husband: i got some ${butter}`);
    console.log('Wife: we should go in');
    console.log('Husband: i need cold-drinks');
    
    let coldDrink = await getColdDrinks;
    
    console.log(`husband: i got some ${coldDrink}`);
    console.log('Wife: we should go in');
    console.log('Husband: Yes Darling');

    return ticket;

}

preMovie().then((m)=> console.log(`person 3: shows ${m}`));


console.log('person4; shows ticket');
console.log('person5; shows ticket');