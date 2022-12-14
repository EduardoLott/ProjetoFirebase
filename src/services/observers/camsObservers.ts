import React from "react";
import { db } from "../../firebaseconfig";

const camsReference = db.collection('cameras');

export function getCamsObserver(callback: React.Dispatch<React.SetStateAction<any[]>>, camsNomeCamera: string[]){
    camsReference.where('NomeCamera','in',camsNomeCamera).onSnapshot((snapshot)=>{
        const cams: any[] = []
        snapshot.forEach((doc)=>{
            cams.push(doc.data());
        })
        callback(cams);
    })
}