import { db } from "../../firebaseconfig";

const camsReference = db.collection('cameras');

export function getCamsObserver(callback: any){
    camsReference.onSnapshot((snapshot)=>{
        const cams: any[] = []
        snapshot.forEach((doc)=>{
            cams.push(doc.data());
        })
    })
}