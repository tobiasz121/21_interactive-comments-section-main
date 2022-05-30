const productdb = (dbname,table) => {
    //Create new database
    const db = new Dexie(dbname)
    db.version(1).stores(table)
    db.open()
    
    return db
       
}

const notEmpty = object => {
    let flag = false;

    for(const value in object){
        if(object[value] != '' && object.hasOwnProperty(value)){
            flag = true;
        }
        else {
            flag = false;    
            break      
        }    
    }
    return flag;
}

const bulkCreate = (dbtable, data) =>{    
    let flag = notEmpty(data)
    if(flag){
        dbtable.bulkAdd([data])
        console.log('Data inserted successfully')
    }
    else{
        console.log('Please provide data')
    }
    return flag    
}

const getData = (db, fn) => {
    let index = 0;
    let obj = {};
    
    db.count(cnt=> {        
        if(cnt){
            db.each(table => {
                obj = sortObj(table)                
                fn(obj, index++)
            })
        }
        else {
            fn(0)
        }
    })
   
}

export default productdb;
export {
    bulkCreate, getData
}