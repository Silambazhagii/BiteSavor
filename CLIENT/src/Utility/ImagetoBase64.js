
//we can see in console while we uploading image so many characters
async function ImagetoBase64(file){
    const reader=new FileReader()
    reader.readAsDataURL(file)

    const data=new Promise((resolve,reject)=>{
        reader.onload =()=> resolve(reader.result)
        reader.onerror =err =>reject(err)
    })

    return data
}

export {ImagetoBase64}