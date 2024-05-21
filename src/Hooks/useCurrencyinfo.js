
const url = 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc9fc3a0c5mshebbb9b98b6a1cc5p15a3aajsn5070422db04c',
		'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
	}
};



export const fetchData=async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
    
};
export const convertcurr=  async(from,to,amount)=>{
    const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=%${to}&amount=${amount}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc9fc3a0c5mshebbb9b98b6a1cc5p15a3aajsn5070422db04c',
		'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return result
} catch (error) {
	console.error(error);
}

}