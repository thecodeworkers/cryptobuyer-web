import { GraphQlClient } from '@utils'

export const registerUser = async (email: string) => {
  const query = `
    mutation registerUser {
      registerUser(input: {
        email: "${email}"
        username: "${email}"
      }) {
        user {
          email
        }
      }
    }
  `

  const result = await GraphQlClient(query)
  return 'registerUser' in result ? true : false
}
