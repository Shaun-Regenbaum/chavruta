
export async function getMishna(name:string){

    const language = "he";
    // const version = "Mishnah_Berurah,_Mishnah_Berurah,_Orach_Chayim.1";
    const url =  `http://www.sefaria.org/api/texts/${name}/${language}`
    // const headers = {
    // }
   
    const response = await fetch(url, {
        method: 'GET',
        // headers: headers,
    });
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    // console.log(data);
    return data.he
    // return data;
    
}

