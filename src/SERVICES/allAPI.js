import CommonAPI from "./CommonAPI"
import ServerURL from "./ServerURL"

//resume add api - called by userinputs(view) ,when finish btn clicked
export const addResumeAPI = async(resume)=>{
    return await CommonAPI(`${ServerURL}/resumes`,"POST",resume)
}
// get resume api - called from viewresume when page load(),inside useEffect hook 

export const getResumeAPI = async(id)=>{
    return await CommonAPI(`${ServerURL}/resumes/${ id }`,"GET",{})
}
//update resume api
export const updateResumeAPI = async(id,resume)=>{
    return await CommonAPI(`${ServerURL}/resumes/${ id }`,"PUT",resume)
}
//add history api
export const addHistoryAPI = async(history)=>{
    return await CommonAPI(`${ServerURL}/history`,"POST",history)
}
//get history api- called from history when page load(),inside useEffect hook 
export const getHistoryAPI = async()=>{
    return await CommonAPI(`${ServerURL}/history`,"GET",{})
}
//remove allhistoryapi
export const removeHistoryAPI = async(id)=>{
    return await CommonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}

