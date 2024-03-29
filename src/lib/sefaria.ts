import { error } from "@sveltejs/kit";

interface Mishna {
    mishna: string;
    chapter: number;
    verse: number;
}

export async function getMishna(mishna:Mishna){
    // const version = "Mishnah_Berurah,_Mishnah_Berurah,_Orach_Chayim.1";
    const url =  `http://www.sefaria.org/api/texts/${mishna.mishna}.${mishna.chapter}`

   
    const response = await fetch(url, {
        method: 'GET',
        // headers: headers,
    });
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);

    } else {
        return data.he
    }

    // let chapterLen: number = data.he.length;


    // if (mishna.verse <= chapterLen) {
    //     return data.he[mishna.verse-1];
    // } else if (mishna.verse > chapterLen && data.next){
    //     return "End of Chapter"
    // } else {
    //     return "End of Masechet"
    // }


   
    
}

export async function getMefarshim(mishna:Mishna, mefaresh:string) {
    const url =  `http://www.sefaria.org/api/texts/${mefaresh} on Mishnah ${mishna.mishna} ${mishna.chapter}.${mishna.verse}`;
    
   
    const response = await fetch(url, {
        method: 'GET',
    });

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }

    return data.he
}