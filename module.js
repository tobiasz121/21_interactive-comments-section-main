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
                fn(table, index++)
            })
        }
        else {
            fn(0)
        }
    })
   
}

const sortObj = sortobj => {
    let obj = {}
    obj = {
        id : sortobj.id,
        name: sortobj.name,
        seller: sortobj.seller,
        price: sortobj.price
    }
    return obj
}

const getDate = () => {
    const cur = new Date()
    return cur.toISOString()
    
}

const decodeDate = (date) => {
    let dateSource = date.split('T')
    let datePart = dateSource[0]
    let timePart = dateSource[1]
    

    let dateParts = datePart.split('-')
    let yr = Number.parseInt(dateParts[0],10)
    let mo = Number.parseInt(dateParts[1],10)   
    let day = Number.parseInt(dateParts[2],10)  

    let timeParts = timePart.split(':')
    let hr = Number.parseInt(timeParts[0],10)
    let min = Number.parseInt(timeParts[1],10)

    const cur = new Date()

    console.log(yr - cur.getFullYear())
   
    
}

export default productdb;
export {
    bulkCreate, getData, getDate, decodeDate
}

