import { booksHandler } from "./booksHandler.js";
import { usersHandler } from "./userHandler.js";
import { defaultHandler } from "./defautlHandler.js";

export const mainHandler = (req,res) =>{
    const url = req.url;
    console.log(`url = ${url}`);
    if (url.startsWith('/api')){
        if(url.startsWith('/api/books')){
            booksHandler(req,res);
            return;
        }if(url.startsWith('/api/users')){
            usersHandler(req,res)
            return
        }

    }

    return defaultHandler(req,res);
};