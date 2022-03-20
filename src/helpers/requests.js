export const sendDefaultReq = async (url, options) => {
    const req = await fetch(url, { ...options })
    const { status } = req
  
    const res = await req.json()
  
    if (status >= 200 && status < 300) return res
  
    const errorMess = res.message || res.error ||  'Something went wrong. Please try again later'
  
    throw new Error(errorMess)
  }