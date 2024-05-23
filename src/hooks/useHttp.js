import { useCallback } from "react";

const useHttp = () => {
    return result = useCallback( async (url, method="GET", body=null, header='Content-Type: application/json') => {
        try {
            const response = await fetch(url, { method, body, header })
            if(!response.ok) {
               throw new Error(`there is problem width ${response.status}`)
            }
            else {
                const data = await response.json()
                return data
            }
        }    
        catch(e) {
            console.log(e);
        }    
    })
}
 
export default useHttp;