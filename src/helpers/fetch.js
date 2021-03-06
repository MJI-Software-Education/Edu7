const baseURL = 'http://localhost:8080/api';

export const fetchSinToken = async(endpoint, data={}, method ='GET') => {
    const conexion = localStorage.getItem('conexion');
    data.conexion = conexion;
    const url = `${baseURL}/${endpoint}`;
    if(method === 'GET'){
        const resp = await fetch(url);
        return await resp.json();
    }else{
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        return await resp.json();
    }
}
export const fetchConToken = async(endpoint, data={}, method ='GET') => {
    const conexion = localStorage.getItem('conexion');
    data.conexion = conexion;
    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token');
    if(method === 'GET'){
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
        });
        return await resp.json();
    }else {
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        });
        return await resp.json();
    }
}
export const fetchConTokenArchivos = async(endpoint, data, method ='GET') => {
    const conexion = localStorage.getItem('conexion');
    let formData = new FormData();
    formData.append('archivo',data);
    formData.append('conexion',conexion);
    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token');
        const resp = await fetch(url,{
            method,
            headers:{
                'x-token':token
            },
            body:formData
        });
        return await resp.json();
    
}
export const fetchConTokenDocumento = async(endpoint, data={}, method ='GET') => {
    const conexion = localStorage.getItem('conexion') || 'MJIServer';
    data.conexion = conexion;
    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token');
    if(method === 'GET'){
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
        });
        return await resp;
    }else {
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        });
        return await resp;
    }
}