
export async function getMishna(masechet:string, perek:number, mishna: number){

    const language = "he";
    // const version = "Mishnah_Berurah,_Mishnah_Berurah,_Orach_Chayim.1";
    const url =  `http://www.sefaria.org/api/texts/${masechet}.${perek}/${language}`
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
    return data.he[mishna-1];
    // return data;
    
}

export async function nextMishna(currentMasechet: string, currentPerek: number, currentMishna: number){
    const data = getMishna(currentMasechet, currentPerek, currentMishna + 1);
    
}

export async function getMefarshim(masechet:string, perek:number, mishna: number, mefaresh?:string) {
    const language = "he";

    const url =  `http://www.sefaria.org/api/links/${masechet}.${perek}.${mishna}`;
    
   
    const response = await fetch(url, {
        method: 'GET',
    });

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }

    let mef;
    switch (mefaresh) {
        case "bar":
            mef = "Bartenura";
            break;
        case "ram":
            mef = "Rambam";
            break;
        default:
            mef = "Bartenura";
            break;
      }
    // get bartanura for that mishna
    const bart = [];
    const [, masechetSplit] = masechet.split('_');

    for (const json of data) {
        if (json.index_title === `${mef} on Mishnah ${masechetSplit}`) {
          bart.push(json.he);
        }
      }
      

    return bart;

}