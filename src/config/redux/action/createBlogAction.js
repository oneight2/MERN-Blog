import axios from "axios"

export const setForm = (formType, formValue) => {
    return{type: 'SET_FORM DATA', formType, formValue}
}
export const setImgPreview = (payload) => {
    return{type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) =>{
    const data = new FormData();
    data.append('title', form.title)
    data.append('content', form.content)
    data.append('image', form.image)

    axios.post('http://localhost:4000/v1/blog/post', data,{
      headers:{
        'content-type' : 'multipart/form-data'
      }
    }).then(res =>{
      console.log('post success:', res)
    }).catch(err =>{
      console.log('err', err)
    })
}