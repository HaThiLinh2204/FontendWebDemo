export const getListGiay = () =>{
    return fetch('http://localhost:8002/api/giays',{
        method : "GET"
    })
    .then(data => data.json())
    .then((data) => {
        //console.log(data);
        return data });

};
