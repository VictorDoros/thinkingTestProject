import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import APIRequests from "../../pages/apiRequests"

describe("Register user", { tags: ["@api", "@userRegister"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    env = new Environment()
    apiRequest = new APIRequests()
  })

  it("Register user by API", () => {
    apiRequest.registerUsingAPI(user, env)
  })
})
