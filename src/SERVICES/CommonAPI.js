import  axios from "axios"
const CommonAPI= async(url,httpMethod,reqBody)=>{
    const requestConfig = {
        url,
        method:httpMethod,
        data:reqBody

    }
    //api call
    return await axios(requestConfig).then(res=>res).catch(err=>err)
}
export default CommonAPI