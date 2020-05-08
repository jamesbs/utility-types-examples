import { Brand } from 'utility-types'

type ErrorMessage = Brand<string, 'errorMessage'>


type GetDataSuccess = { 
  data: {
    id: "id"
  } 
}
type GeneralErrorResponse = { error: ErrorMessage } 

type GetDataBody = GetDataSuccess | GeneralErrorResponse

const logError = (errorMessage: ErrorMessage) => {
  console.error(errorMessage)
}

const isErrorResponse = <T>(response: T | GeneralErrorResponse): response is GeneralErrorResponse =>
  (<GeneralErrorResponse>response).error !== undefined

const getData = async () => {
  const response = await fetch('some url')
  const body: GetDataBody = await response.json()

  if(isErrorResponse(body)) {
    logError((<GeneralErrorResponse>body).error);
  } else {
    // logError(body.data.id);
  }
}


getData();


// allows you define in more detail what sources can use your function
// without having to hard code specific responses in code like you do with enums
// sharing enums between frontend and backend forms a hard coupling that you might not want
// this loosens the coupling since you don't need to share types but can still
// limit sources of data to specific contracts
