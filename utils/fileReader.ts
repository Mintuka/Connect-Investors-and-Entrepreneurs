export const readFile = (e:any, callback:any) => {
    const reader = new FileReader()
    reader.onload = async(event) => {
        const base64Data = event.target?.result;
        callback(base64Data)
      };
    reader.readAsText(e.target.files[0]);
}