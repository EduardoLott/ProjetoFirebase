import { db } from "../../firebaseconfig";

const camsReference = db.collection('cameras');

export async function addCamsAcess(body: any){
    const response = await camsReference.add(body)
    return response;
}

export async function setCamsAcess(body: any, id: string){
    const response = await camsReference.doc(id).set(body)
    return response;
}

export async function updateCamsAcess(body: any, id: string){
    const response = await camsReference.doc(id).update(body)
    return response;
}

export async function getCamsAcess() {
    const response = await camsReference.get();
    return  response;
}