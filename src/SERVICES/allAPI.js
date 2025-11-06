import CommonAPI from "./CommonAPI"
import ServerURL from "./ServerURL"

//resume add api - called by userinputs(view) ,when finish btn clicked
export const addResumeAPI = async(resume)=>{
    return await CommonAPI(`${ServerURL}/resumes`,"POST",resume)
}
// get resume api

export const getResumeAPI = async(id)=>{
    return await CommonAPI(`${ServerURL}/resumes/${ id }`,"GET",{})
}
//update resume api
export const updateResumeAPI = async(id,resume)=>{
    return await CommonAPI(`${ServerURL}/resumes/${ id }`,"PUT",resume)
}