import { addCamsAcess, getCamsAcess, setCamsAcess, updateCamsAcess } from "../dataAcess/camAcess";


export async function addCamsAction(body: any){
    const response = await addCamsAcess(body);
    return response.id;
}
 
export async function setCamsAction(body: any, id: string){
    const response = await setCamsAcess(body, id);
    return response;
}

export async function updateCamsAction(body: any, id: string){
    const response = await updateCamsAcess(body, id);
    return response;
}

export async function getCamsAction(){
    const response = await getCamsAcess();
    const cams: any[] = []
    response.forEach((doc)=>{
        cams.push(doc.data());
    });
    return cams;
}