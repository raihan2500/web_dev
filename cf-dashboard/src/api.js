
export async function getUser(handle){
  try{
    const url = "https://codeforces.com/api/user.info?handles=" + handle;
    const res = await fetch(url);
    const data = await res.json();
    return data.result[0];

  }catch(err){
    console.log(err);
    return null;
  }
}