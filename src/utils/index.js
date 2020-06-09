/* eslint-disable */
export function handleApiErrors (response) { 
    if (response.message) throw new Error(response.message)
    return response
  }